import { StyleSheet } from "react-native";
import { ThemeType } from "../data/themeProvider";

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 16,
      backgroundColor: theme.overlay,
    },

    backdrop: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },

    modalCard: {
      width: "100%",
      maxWidth: 420,
      maxHeight: "88%",
      backgroundColor: theme.background,
      borderRadius: 24,
      paddingTop: 18,
      paddingBottom: 14,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 4 },
      elevation: 10,
    },

    header: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingBottom: 12,
      gap: 12,
    },

    headerTextBlock: {
      flex: 1,
    },

    title: {
      fontSize: 26,
      fontFamily: "Lexend_400Regular",
      color: theme.on_background,
    },

    stepTitle: {
      marginTop: 4,
      fontSize: 13,
      fontFamily: "Lexend_400Regular",
      color: theme.on_surface_medium,
    },

    closeButton: {
      width: 38,
      height: 38,
      borderRadius: 19,
      backgroundColor: theme.surface,
      justifyContent: "center",
      alignItems: "center",
    },

    progressTrack: {
      height: 8,
      backgroundColor: theme.surface_container_high,
      borderRadius: 999,
      marginHorizontal: 20,
      overflow: "hidden",
      marginBottom: 8,
    },

    progressFill: {
      height: "100%",
      backgroundColor: theme.primary,
      borderRadius: 999,
    },

    form: {
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 12,
    },

    stepContent: {
      gap: 14,
    },

    stepLabel: {
      fontSize: 16,
      fontFamily: "Lexend_400Regular",
      color: theme.on_background,
    },

    helperBox: {
      backgroundColor: theme.surface_container,
      padding: 12,
      borderRadius: 12,
    },

    helperText: {
      fontSize: 13,
      fontFamily: "Lexend_400Regular",
      color: theme.on_surface,
    },

    imageBox: {
      height: 180,
      borderRadius: 16,
      backgroundColor: theme.surface,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },

    imageText: {
      color: theme.on_surface_medium,
      fontFamily: "Lexend_400Regular",
    },

    image: {
      width: "100%",
      height: "100%",
      borderRadius: 16,
    },

    input: {
      backgroundColor: theme.surface_container,
      padding: 14,
      borderRadius: 12,
      fontFamily: "Lexend_400Regular",
      color: theme.on_background,
    },

    description: {
      backgroundColor: theme.surface_container,
      padding: 14,
      borderRadius: 12,
      minHeight: 120,
      textAlignVertical: "top",
      fontFamily: "Lexend_400Regular",
      color: theme.on_background,
    },

    dropdown: {
      backgroundColor: theme.surface_container,
      borderRadius: 12,
      overflow: "hidden",
    },

    reviewCard: {
      backgroundColor: theme.surface_container,
      borderRadius: 14,
      padding: 14,
      gap: 6,
    },

    reviewTitle: {
      fontSize: 15,
      fontFamily: "Lexend_400Regular",
      color: theme.on_background,
    },

    reviewText: {
      fontSize: 13,
      fontFamily: "Lexend_400Regular",
      color: theme.on_surface_medium,
    },

    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      paddingHorizontal: 20,
      paddingTop: 8,
    },

    footerSpacer: {
      flex: 1,
    },

    secondaryButton: {
      flex: 1,
      backgroundColor: theme.surface,
      paddingVertical: 15,
      borderRadius: 14,
      alignItems: "center",
    },

    secondaryButtonText: {
      color: theme.on_background,
      fontSize: 15,
      fontFamily: "Lexend_400Regular",
    },

    submitButton: {
      flex: 1,
      backgroundColor: theme.primary,
      paddingVertical: 15,
      borderRadius: 14,
      alignItems: "center",
    },

    submitText: {
      color: theme.on_primary,
      fontSize: 15,
      fontFamily: "Lexend_400Regular",
    },
  });
