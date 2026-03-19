import { Stack } from "expo-router";
import { useEffect } from "react";
import { addUser, getUsers } from "./utils/authStorage";
import { startLocationTracking } from "./utils/backgroundLocation";

export default function RootLayout() {
useEffect(() => {
  const seedAdminUser = async () => {
    const users = await getUsers();
    const adminExists = false;
    //const adminExists = users.some((u) => u.email === "admin@concordia.ca");
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

  seedAdminUser();
  startLocationTracking();
}, []);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}