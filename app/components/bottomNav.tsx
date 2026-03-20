import { LinearGradient } from "expo-linear-gradient";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, useColorScheme, View } from "react-native";
import { bottomNavStyles as importStyles } from "../styles/bottomNavStyles";

import { Bell, Calendar, House, Plus, User } from "lucide-react-native";
import { Themes } from "../styles/Themes";

interface BottomNavProps {
  onPressAdd?: () => void;
}

const navItems = [
  { route: "/home", icon: House, key: "home" },
  { route: "/events", icon: Calendar, key: "events" },
  { route: "/create", icon: Plus, key: "create" },
  { route: "/notifications", icon: Bell, key: "notifications" },
  { route: "/settings", icon: User, key: "profile" },
];

export default function BottomNav({ onPressAdd }: BottomNavProps) {
  const router = useRouter();
  const pathname = usePathname();

  const styles = importStyles(
    useColorScheme() === "dark" ? Themes.dark : Themes.light,
  );
  const theme = useColorScheme() === "dark" ? Themes.dark : Themes.light;

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[theme.surface_bright, theme.background, theme.background]}
        style={styles.bottomNav}
      >
        {navItems.map((item) => {
          const isCreate = item.key === "create";
          const isActive = !isCreate && pathname === item.route;
          const Icon = item.icon;

          return (
            <TouchableOpacity
              key={item.key}
              style={[styles.navItem, isActive && styles.activeNavItem]}
              onPress={() => {
                if (isCreate) {
                  onPressAdd?.();
                } else {
                  router.replace(item.route as any);
                }
              }}
            >
              <Icon
                size={26}
                color={
                  isActive ? theme.on_surface : theme.on_surface_variant_light
                }
                strokeWidth={2}
              />
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
}
