import AsyncStorage from "@react-native-async-storage/async-storage";
import { BUILDING_LOCATIONS } from "./geofencing";

export async function simulateNearBuilding(buildingId: string) {
  const building = BUILDING_LOCATIONS[buildingId];
  if (!building) return;

  await AsyncStorage.setItem("nearBuilding", JSON.stringify({
    buildingId,
    buildingName: building.name,
    time: new Date().toISOString(),
  }));
}