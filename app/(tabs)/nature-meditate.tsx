import { FlatList, ImageBackground, Pressable, Text, View } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/MeditationImages";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function NatureMeditate() {
  return (
    <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <View>
        <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">Welcome</Text>
        <Text className="text-indigo-100 text-xl font-medium">
          Start your meditation practice today
        </Text>
      </View>
      <View>
        <FlatList
          data={MEDITATION_DATA}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              className="h-48 my-3 rounded-md overflow-hidden"
              onPress={() => router.push(`/meditate/${item.id}`)}
            >
              <ImageBackground
                source={MEDITATION_IMAGES[item.id - 1]}
                resizeMode="cover"
                className="flex-1 rounded-xl"
              >
                <LinearGradient
                  className="w-full h-full justify-center items-center"
                  colors={["transparent", "rgba(0,0,0,0.8)"]}
                >
                  <Text className="text-gray-100 text-3xl font-bold text-center">{item.title}</Text>
                </LinearGradient>
              </ImageBackground>
            </Pressable>
          )}
        ></FlatList>
      </View>
    </AppGradient>
  );
}
