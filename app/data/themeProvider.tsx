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
  white: any; //#FFFFFF",
  black: any; //#111111",
  text: any; //#1F1F1F",
  subtext: any; //#4E4E4E",
  muted: any; //#6B7280",

  primary: any; //#56bab8",
  primaryDark: any; //#5a8c8b",
  pink: any; //#e7548b",
  lavender: any; //#9796b8",
  softPink: any; //#d6b1c3",
  cardBg: any;
  success: any;
  disabled: any; //"#B8BDC7",
  warning: any; //"#D98B1F",

  border: any; //#E7E7EC",
  softBg: any; //#F9FAFB",
  tealTint: any; //#EEF9F8",
  pinkTint: any; //#FCEAF1",
  lavenderTint: any; //#F3F1FA",

  errorBg: any; //#FFF1F4",
  errorBorder: any; //#F3C7D6",
  errorText: any; //#B42318",

  successBg: any; //#EEF9F8",
  successBorder: any; //#BFE8E6",
  successText: any; //#2F6F6D",
  iconInactive: any;
};
