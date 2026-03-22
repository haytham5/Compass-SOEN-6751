import { StyleSheet } from "react-native";
import { ThemeType } from "../data/themeProvider";

export const styles = (COLORS: ThemeType) =>
  StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: COLORS.white,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textRegion: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    header: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 8,
      paddingTop: 20,
      paddingHorizontal: 20,
      gap: 10,
      animationDuration: 10,
    },

    title: {
      fontSize: 28,
      fontFamily: "Lexend_400Regular",
      color: COLORS.black,
      letterSpacing: -0.4,
    },

    subtitle: {
      fontSize: 14,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",

      fontFamily: "Lexend_400Regular",
      color: COLORS.subtext,
      lineHeight: 20,
    },

    ghostButton: {
      alignItems: "center",
      paddingVertical: 12,
    },

    ghostButtonText: {
      fontFamily: "Lexend_400Regular",
      fontSize: 13,
      color: COLORS.subtext,
      textDecorationLine: "underline",
    },

    card: {
      backgroundColor: COLORS.white,
      borderRadius: 24,
      paddingHorizontal: 24,
      paddingVertical: 28,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 4,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: COLORS.border,

      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    cardTitle: {
      fontFamily: "Lexend_400Regular",
      fontSize: 22,
      color: COLORS.black,
      marginBottom: 4,
    },

    cardText: {
      flexShrink: 1,
      fontSize: 17,
      fontFamily: "Lexend_400Regular",
      color: COLORS.black,
      marginLeft: 12,
    },

    deleteCard: {
      backgroundColor: COLORS.pinkTint,
      marginRight: 2,
    },
  });
