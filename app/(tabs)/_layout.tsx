import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PapperIcon } from "@/assets/images/icons/PapperIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="exams"
        options={{
          title: "Exames",
          tabBarIcon: ({ color }) => (
            <PapperIcon width={24} height={24} color="#000" />
          ),
        }}
      />
      <Tabs.Screen
        name="oxigenation"
        options={{
          title: "Oxigenação",
          tabBarIcon: ({ color }) => (
            <PapperIcon width={24} height={24} color="#000" />
          ),
        }}
      />
      <Tabs.Screen
        name="medicines"
        options={{
          title: "Remédios",
          tabBarIcon: ({ color }) => (
            <PapperIcon width={24} height={24} color="#000" />
          ),
        }}
      />
    </Tabs>
  );
}
