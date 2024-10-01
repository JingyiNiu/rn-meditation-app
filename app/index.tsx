import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import React, {  } from "react";
import { View, Text, ImageBackground } from "react-native";
import CustomButton from "@/components/CustomButton";
import beachImage from "@/assets/meditation-images/beach.webp";
import { router } from "expo-router";
import AppGradient from "@/components/AppGradient";

export default function Home() {

  return (
    <View className="flex-1">
      <ImageBackground source={beachImage} resizeMode="cover" className="flex-1">
        <AppGradient>
          <SafeAreaView className="flex-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">Simple Meditation</Text>
              <Text className="text-center text-white text-xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started!"
                containerStyles="bg-purple-500"
                textStyles="text-white"
              />
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
