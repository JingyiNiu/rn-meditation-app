import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function AppGradient({
  children,
  colors = ["rgba(0,0,0,0.5)", "rgba(0,0,0,0.9)"],
}: {
  children: any;
  colors?: string[];
}) {
  return (
    <LinearGradient className="flex-1" colors={colors}>
      <SafeAreaView className="flex-1 p-4">{children}</SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  );
}
