import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { testReports } from "./data/notificationData";
import { getReports, saveNewReport } from "./data/reportSH";
import { addUser, getUsers } from "./utils/authStorage";
import { startLocationTracking } from "./utils/backgroundLocation";

export default function RootLayout() {
  useEffect(() => {
    const seedAdminUser = async () => {
      const users = await getUsers();
      const adminExists = false;
      if (!adminExists) {
        await addUser({
          firstName: "Admin",
          lastName: "User",
          role: "admin",
          idNumber: "000000",
          phone: "",
          email: "admin@concordia.ca",
          password: "admin123",
        });
      }
    };

    const seedSecurityUser = async () => {
      const users = await getUsers();
      const securityExists = users.some((u) => u.email === "security@concordia.ca");
      if (!securityExists) {
        await addUser({
          firstName: "Security",
          lastName: "Officer",
          role: "security",
          idNumber: "111111",
          phone: "",
          email: "security@concordia.ca",
          password: "security123",
        });
      }
    };

    const seedTestReports = async () => {
      // Remove old test reports
      const existing = await getReports();
      const realReports = existing.filter((r) => !r.id.startsWith("test-"));
      await AsyncStorage.setItem("reports", JSON.stringify(realReports));

      // Re-seed with today's date
      for (const report of testReports) {
        await saveNewReport(report);
      }

        const after = await getReports();
        console.log("reports after seeding:", after.length);
        console.log("dates:", after.map(r => r.date));
    };

      // Location access
    const requestPermissions = async () => {
      const { status: foreground } = await Location.requestForegroundPermissionsAsync();
      if (foreground !== "granted") {
        console.log("Foreground location permission denied");
        return;
      }
      const { status: background } = await Location.requestBackgroundPermissionsAsync();
      if (background !== "granted") {
        console.log("Background location permission denied");
      }
    };

    const setup = async () => {
      await requestPermissions();
      await seedAdminUser();
      await seedSecurityUser(); 
      await seedTestReports();
      await AsyncStorage.setItem("seeded", "true"); 
    };

    setup();
    startLocationTracking();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}