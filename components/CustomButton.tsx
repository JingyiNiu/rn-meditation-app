import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

export default function CustomButton({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
}
