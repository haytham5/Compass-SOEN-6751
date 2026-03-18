import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NearBuildingBanner() {
  const [nearBuilding, setNearBuilding] = useState<{
    buildingName: string;
    time: string;
  } | null>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const raw = await AsyncStorage.getItem("nearBuilding");
        if (raw) {
          setNearBuilding(JSON.parse(raw));
        } else {
          setNearBuilding(null);
        }
      } catch (e) {
        console.log("Error checking near building:", e);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!nearBuilding) return null;

  return (
    <View style={styles.banner}>
      <Text style={styles.text}>
        You are near {nearBuilding.buildingName} which has active alerts
      </Text>
      <TouchableOpacity onPress={async () => {
        await AsyncStorage.removeItem("nearBuilding");
        setNearBuilding(null);
      }}>
        <Text style={styles.dismiss}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#E98A8A",
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 13,
    fontFamily: "Lexend_400Regular",
    flex: 1,
  },
  dismiss: {
    color: "white",
    fontSize: 18,
    paddingLeft: 10,
  },
});