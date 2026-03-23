import { StyleSheet } from "react-native";
import { ThemeType } from "../data/themeProvider";

// const COLORS = {
//   white: "#FFFFFF",
//   black: "#111111",
//   text: "#1F1F1F",
//   subtext: "#4E4E4E",
//   muted: "#6B7280",

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

export const styles = (COLORS: ThemeType) =>
  StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: COLORS.white,
      justifyContent: "space-between",
    },

    scrollableContent: {
      paddingTop: 20,
      paddingHorizontal: 20,
      paddingBottom: 120,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingTop: 10,
    },

    title: {
      fontSize: 27,
      fontFamily: "Lexend_400Regular",
      color: COLORS.black,
      letterSpacing: -0.4,
    },

    tabContainer: {
      flexDirection: "row",
      backgroundColor: COLORS.softBg,
      marginHorizontal: 20,
      marginTop: 12,
      marginBottom: 12,
      borderRadius: 18,
      padding: 4,
      borderWidth: 1,
      borderColor: COLORS.border,
    },

    tabButton: {
      flex: 1,
      paddingVertical: 12,
      borderRadius: 14,
      alignItems: "center",
    },

    activeTabButton: {
      backgroundColor: COLORS.pinkTint,
      borderWidth: 1,
      borderColor: COLORS.softPink,
    },

    tabButtonText: {
      fontFamily: "Lexend_400Regular",
      fontSize: 14,
      color: COLORS.subtext,
    },

    activeTabButtonText: {
      color: COLORS.black,
    },

    profileCard: {
      backgroundColor: COLORS.white,
      borderRadius: 24,
    },

    profileHero: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: COLORS.tealTint,
      borderRadius: 22,
      padding: 16,
      marginBottom: 18,
      borderWidth: 1,
      borderColor: COLORS.border,
    },

    avatarCircle: {
      width: 68,
      height: 68,
      borderRadius: 34,
      backgroundColor: COLORS.primary,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 14,
    },

    avatarText: {
      fontFamily: "Lexend_400Regular",
      fontSize: 24,
      color: COLORS.white,
    },

    profileHeroText: {
      flex: 1,
    },

    profileName: {
      fontFamily: "Lexend_400Regular",
      fontSize: 22,
      color: COLORS.black,
    },

    roleBadge: {
      alignSelf: "flex-start",
      backgroundColor: COLORS.white,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 999,
      marginTop: 6,
      marginBottom: 6,
      borderWidth: 1,
      borderColor: COLORS.border,
    },

    roleBadgeText: {
      fontFamily: "Lexend_400Regular",
      fontSize: 12,
      color: COLORS.primaryDark,
    },

    profileSubText: {
      fontFamily: "Lexend_400Regular",
      fontSize: 13,
      color: COLORS.subtext,
    },

    sectionBlock: {
      marginTop: 8,
      marginBottom: 16,
    },

    sectionTitle: {
      fontFamily: "Lexend_400Regular",
      fontSize: 16,
      color: COLORS.black,
      marginBottom: 10,
    },

    infoCard: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 18,
      padding: 14,
    },

    formCard: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 18,
      padding: 14,
    },

    infoRow: {
      paddingVertical: 6,
    },

    infoDivider: {
      height: 1,
      backgroundColor: COLORS.border,
      marginVertical: 8,
    },

    profileLabel: {
      fontFamily: "Lexend_400Regular",
      fontSize: 13,
      color: COLORS.muted,
      marginBottom: 4,
    },

    profileValue: {
      fontFamily: "Lexend_400Regular",
      fontSize: 16,
      color: COLORS.black,
    },

    profileInput: {
      backgroundColor: COLORS.softBg,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 14,
      paddingHorizontal: 14,
      paddingVertical: 12,
      marginBottom: 14,
      fontFamily: "Lexend_400Regular",
      fontSize: 15,
      color: COLORS.black,
    },

    profileReadOnlyBox: {
      backgroundColor: COLORS.softBg,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 14,
      paddingHorizontal: 14,
      paddingVertical: 12,
      marginBottom: 14,
    },

    profileReadOnlyText: {
      fontFamily: "Lexend_400Regular",
      fontSize: 15,
      color: COLORS.subtext,
    },

    primaryProfileButtonFull: {
      backgroundColor: COLORS.pink,
      paddingVertical: 14,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 18,
      width: "100%",
    },

    primaryProfileButton: {
      flex: 1,
      backgroundColor: COLORS.pink,
      paddingVertical: 14,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
    },

    primaryProfileButtonText: {
      fontFamily: "Lexend_400Regular",
      fontSize: 14,
      color: COLORS.white,
    },

    secondaryProfileButton: {
      flex: 1,
      backgroundColor: COLORS.softBg,
      paddingVertical: 14,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: COLORS.border,
    },

    secondaryProfileButtonText: {
      fontFamily: "Lexend_400Regular",
      fontSize: 14,
      color: COLORS.primaryDark,
    },

    editActionsRow: {
      flexDirection: "row",
      columnGap: 10,
      marginTop: 8,
      marginBottom: 8,
    },

    settingsCard: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 18,
      overflow: "hidden",
      marginBottom: 18,
    },

    settingRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 16,
    },

    settingLabel: {
      fontSize: 16,
      fontFamily: "Lexend_400Regular",
      color: COLORS.black,
    },

    settingsDivider: {
      height: 1,
      backgroundColor: COLORS.border,
      marginHorizontal: 16,
    },

    dangerButton: {
      backgroundColor: COLORS.pinkTint,
      borderRadius: 16,
      paddingVertical: 14,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "#F4C9D9",
    },

    dangerButtonText: {
      fontSize: 16,
      fontFamily: "Lexend_400Regular",
      color: COLORS.pink,
    },

    dangerButtonSecondary: {
      backgroundColor: COLORS.lavenderTint,
      borderRadius: 16,
      paddingVertical: 14,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#DDDCEF",
    },

    dangerButtonSecondaryText: {
      fontSize: 16,
      fontFamily: "Lexend_400Regular",
      color: COLORS.lavender,
    },

    preferencesModalScreen: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal: 16,
      paddingTop: 8,
    },
  });
