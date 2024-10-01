import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import MEDITATION_IMAGES from "@/constants/MeditationImages";

export default function MeditatePage() {
  const { id } = useLocalSearchParams();

  return (
    <ImageBackground
      source={MEDITATION_IMAGES[Number(id) - 1]}
      resizeMode="cover"
      className="flex-1"
    >
      <AppGradient>
        <Pressable onPress={() => router.back()} className="absolute top-16 left-6 z-10">
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="flex-1 justify-center">
          <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
            <Text className="text-4xl text-purple-800 font-rmono">00:00</Text>
          </View>
        </View>
      </AppGradient>
    </ImageBackground>
  );
}
