import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import * as Notifications from "expo-notifications";
import * as TaskManager from "expo-task-manager";
import { BUILDING_LOCATIONS, GEOFENCE_RADIUS, getDistanceMetres } from "./geofencing";

export const LOCATION_TASK = "background-location-task";

// Track which buildings we already notified about
// so we don't spam the user
const notifiedBuildings = new Set<string>();

TaskManager.defineTask(LOCATION_TASK, async ({ data, error }: any) => {
  if (error) return;

  const { locations } = data;
  const { latitude, longitude } = locations[0].coords;

  // Load which buildings the user is subscribed to
  const raw = await AsyncStorage.getItem("subscriptions");
  const subscriptions = raw ? JSON.parse(raw) : [];
  const subscribedIds = subscriptions
    .filter((s: any) => s.isSubscribed)
    .map((s: any) => s.id);

  for (const id of subscribedIds) {
    const building = BUILDING_LOCATIONS[id];
    if (!building) continue;

    const distance = getDistanceMetres(latitude, longitude, building.latitude, building.longitude);

    if (distance <= GEOFENCE_RADIUS && !notifiedBuildings.has(id)) {
      // Fire the notification
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `⚠️ Alert near ${building.name}`,
          body: `You are near ${building.name}, which has active alerts.`,
          sound: true,
        },
        trigger: null, // fire immediately
      });
      notifiedBuildings.add(id);
    }

    // Reset when they leave the area
    if (distance > GEOFENCE_RADIUS * 2) {
      notifiedBuildings.delete(id);
    }
  }
});

export async function startLocationTracking() {
  const { status: foreground } = await Location.requestForegroundPermissionsAsync();
  if (foreground !== "granted") return;

  const { status: background } = await Location.requestBackgroundPermissionsAsync();
  if (background !== "granted") return;

  await Notifications.requestPermissionsAsync();

  await Location.startLocationUpdatesAsync(LOCATION_TASK, {
    accuracy: Location.Accuracy.Balanced,
    distanceInterval: 20, // only update every 20 metres moved
    showsBackgroundLocationIndicator: true,
    foregroundService: {
      notificationTitle: "CampusAlert is running",
      notificationBody: "Monitoring nearby buildings for alerts",
    },
  });
}

export async function stopLocationTracking() {
  await Location.stopLocationUpdatesAsync(LOCATION_TASK);
}