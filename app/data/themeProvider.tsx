import AsyncStorage from "@react-native-async-storage/async-storage";

export type Scheme = {
  type: "light" | "dark";
};

export const switchTheme = async () => {
  try {
    const themeSetting = JSON.parse(
      (await AsyncStorage.getItem("colorScheme")) || "light",
    );
    const newScheme = themeSetting === "light" ? "dark" : "light";
    await AsyncStorage.setItem("colorScheme", JSON.stringify(newScheme));
    console.log("Theme switched successfully");
  } catch (error) {
    console.error("Error switching theme:", error);
  }
};

export const getTheme = async (): Promise<Scheme> => {
  try {
    const themeSetting = JSON.parse(
      (await AsyncStorage.getItem("colorScheme")) || "light",
    );
    return { type: themeSetting };
  } catch (error) {
    console.error("Error getting theme:", error);
    return { type: "light" };
  }
};

export type ThemeType = {
  primary?: string;
  surface_tint?: string;
  on_primary?: string;
  primary_container?: string;
  on_primary_container?: string;
  secondary?: string;
  on_secondary?: string;
  secondary_container?: string;
  on_secondary_container?: string;
  tertiary?: string;
  on_tertiary?: string;
  tertiary_container?: string;
  on_tertiary_container?: string;
  error?: string;
  on_error?: string;
  error_container?: string;
  on_error_container?: string;
  background?: string;
  on_background?: string;
  surface?: string;
  on_surface?: string;
  on_surface_light?: string;
  surface_variant?: string;
  on_surface_variant?: string;
  on_surface_variant_light?: string;
  surface_dim?: string;
  surface_bright?: string;
  surface_container_lowest?: string;
  surface_container_low?: string;
  surface_container?: string;
  surface_container_high?: string;
  surface_container_highest?: string;
  outline?: string;
  outline_variant?: string;
  shadow?: string;
  scrim?: string;
  overlay?: string;
  fbBuilding?: string;
  evBuilding?: string;
  unsubbed?: string;
  logout?: string;
  border?: any;
  textOnPrimary?: any;
  surfaceHighlight?: any;
  on_surface_medium?: any;
  success_container?: any;
  on_success?: any;
};
