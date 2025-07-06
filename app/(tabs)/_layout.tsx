import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PapperIcon } from "@/assets/images/icons/PapperIcon";
import { TabBar } from "@/components/TabBar/TabBar";
import { OxygenationIcon } from "@/assets/images/icons/OxygenationIcon";
import { MedicinesIcon } from "@/assets/images/icons/MedicinesIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="exams"
        options={{
          title: "Exames",
          tabBarIcon: ({ color }) => (
            <PapperIcon width={35} height={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="oxigenation"
        options={{
          title: "Oxigenação",
          tabBarIcon: ({ color }) => (
            <OxygenationIcon width={38} height={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="medicines"
        options={{
          title: "Remédios",
          tabBarIcon: ({ color }) => (
            <MedicinesIcon width={35} height={35} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
