import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    Animated,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Lexend_400Regular, useFonts } from "@expo-google-fonts/lexend";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "./data/themeProvider";
import { styles as importStyles } from "./styles/calmStyles";
import { Themes } from "./styles/Themes";

import { getReports, Report } from "./data/reportSH";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

const today = new Date().toISOString().split("T")[0];

export default function Calm() {
  const { theme } = useTheme();
  const scheme = Themes.dark;
  const styles = importStyles(scheme);
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Lexend_400Regular,
  });

  const [reports, setReports] = useState<Report[]>([]);
  const [loadingReports, setLoadingReports] = useState(true);
  const [activeRow, setActiveRow] = useState<string | null>(null);

  const opacities = useRef<Record<string, Animated.Value>>({});

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getReports();
        setReports(data);
      } catch (e) {
        console.log("calm load error", e);
      } finally {
        setLoadingReports(false);
      }
    };

    load();
  }, []);

  const calmReports = useMemo(() => {
    return reports.filter(
      (r) => r.date === today && !r.isSevere && !r.isResolved,
    );
  }, [reports]);

  const renderRightActions = () => {
    return (
      <Animated.View style={[styles.card, styles.deleteCard]}>
        <Text style={[styles.title, { fontSize: 18 }]}>Remove</Text>
      </Animated.View>
    );
  };

  const handleRemove = (id: string) => {
    const opacity = opacities.current[id];
    if (!opacity) return;

    Animated.timing(opacity, {
      toValue: 0,
      duration: 80,
      useNativeDriver: true,
    }).start(() => {
      setReports((prev) => prev.filter((r) => r.id !== id));
      delete opacities.current[id];
    });
  };

  if (!fontsLoaded || loadingReports) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.background}>
        <View style={styles.textRegion}>
          <View style={styles.header}>
            <Icon
              style={{ marginTop: 2 }}
              name="bedtime"
              size={24}
              color="#276389"
            />
            <Text style={styles.title}>Calm Mode</Text>
          </View>
          <Text style={styles.subtitle}>
            A Space to Relax with Simple Notifications.
          </Text>
          <Text style={[styles.subtitle, { fontSize: 12 }]}>
            Swipe to remove.
          </Text>
        </View>

        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {calmReports.length === 0 ? (
            <Text style={styles.subtitle}>No disruptions right now.</Text>
          ) : (
            calmReports.map((report) => {
              if (!opacities.current[report.id]) {
                opacities.current[report.id] = new Animated.Value(1);
              }

              return (
                <Swipeable
                  key={report.id}
                  onSwipeableWillOpen={() => setActiveRow(report.id)}
                  ref={(ref) => {
                    if (activeRow !== report.id && ref) {
                      ref.close();
                    }
                  }}
                  renderRightActions={renderRightActions}
                  onSwipeableOpen={() => handleRemove(report.id)}
                  containerStyle={{ opacity: opacities.current[report.id] }}
                >
                  <Animated.View style={[styles.card, ,]}>
                    <Icon
                      name={
                        report.type === "protest" ? "campaign" : "accessible"
                      }
                      size={28}
                      color="#fff"
                    />
                    <Text style={styles.cardText}>
                      {report.building} {report.floor} · {report.time}
                    </Text>
                  </Animated.View>
                </Swipeable>
              );
            })
          )}
        </ScrollView>

        <TouchableOpacity
          style={styles.ghostButton}
          activeOpacity={0.7}
          onPress={async () => {
            router.push("../home");
          }}
        >
          <Text style={styles.ghostButtonText}>Return to Normal Mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
