import { Platform, StyleSheet } from "react-native";
import { ThemeType } from "../data/themeProvider";

// const COLORS = {
//   white: "#FFFFFF",
//   black: "#111111",
//   text: "#1F1F1F",
//   subtext: "#4E4E4E",
//   muted: "#8E8E98",

//   primary: "#56bab8",
//   primaryDark: "#5a8c8b",
//   pink: "#e7548b",
//   lavender: "#9796b8",
//   softPink: "#d6b1c3",

//   border: "#E7E7EC",
//   softBg: "#F9FAFB",
//   tealTint: "#EEF9F8",
//   pinkTint: "#FCEAF1",
//   lavenderTint: "#F3F1FA",
// };

export const bottomNavStyles = (COLORS: ThemeType) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: "transparent",
    },

    bottomNav: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingTop: 8,
      paddingBottom: 16,
      paddingHorizontal: 10,
      borderTopWidth: 1,
      borderTopColor: COLORS.border,
      backgroundColor: COLORS.white,

      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
        },
        android: {
          elevation: 0,
        },
      }),
    },

    iconWrapper: {
      alignItems: "center",
      justifyContent: "center",
    },

    navItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      borderRadius: 18,
    },

    activeNavItem: {
      backgroundColor: COLORS.tealTint,
      borderRadius: 18,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: COLORS.primary,
    },

    createNavItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    createButton: {
      width: 58,
      height: 58,
      borderRadius: 29,
      backgroundColor: COLORS.pink,
      justifyContent: "center",
      alignItems: "center",
      marginTop: -10,
      borderWidth: 4,
      borderColor: COLORS.white,

      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.18,
          shadowRadius: 12,
        },
        android: {
          elevation: 6,
          marginTop: 0,
        },
      }),
    },

    authModalOverlay: {
      flex: 1,
      backgroundColor: "rgba(17,17,17,0.35)",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },

    authModalCard: {
      width: "100%",
      backgroundColor: COLORS.white,
      borderRadius: 22,
      padding: 20,
      borderWidth: 1,
      borderColor: COLORS.border,

      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.12,
          shadowRadius: 20,
        },
        android: {
          elevation: 6,
        },
      }),
    },

    authModalTitle: {
      fontSize: 22,
      fontFamily: "Lexend_400Regular",
      color: COLORS.black,
      marginBottom: 10,
    },

    authModalBody: {
      fontSize: 15,
      lineHeight: 22,
      fontFamily: "Lexend_400Regular",
      color: COLORS.subtext,
      marginBottom: 20,
    },

    authModalButtons: {
      flexDirection: "row",
      gap: 10,
    },

    authSecondaryButton: {
      flex: 1,
      backgroundColor: COLORS.softBg,
      borderRadius: 14,
      paddingVertical: 14,
      alignItems: "center",
      borderWidth: 1,
      borderColor: COLORS.border,
    },

    authSecondaryButtonText: {
      fontSize: 15,
      fontFamily: "Lexend_400Regular",
      color: COLORS.primaryDark,
    },

    authPrimaryButton: {
      flex: 1,
      backgroundColor: COLORS.pink,
      borderRadius: 14,
      paddingVertical: 14,
      alignItems: "center",
    },

    authPrimaryButtonText: {
      fontSize: 15,
      fontFamily: "Lexend_400Regular",
      color: COLORS.white,
    },

    authModalHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10,
    },

    authModalCloseButton: {
      width: 34,
      height: 34,
      borderRadius: 17,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.tealTint,
      borderWidth: 1,
      borderColor: COLORS.border,
    },
  });
