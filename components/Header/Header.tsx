import { View, Text } from "react-native";
import { HeaderProps } from "./Header.types";
import { ArrowLeft } from "@/assets/images/icons/ArrowLeft";
import { Link } from "expo-router";

export default function Header({ children, title }: HeaderProps) {
  return (
    <View className="bg-second_background px-5 pt-16 pb-4">
      <View className="flex-row items-center mb-8">
        <Link href={"/"}>
          <ArrowLeft width={24} height={24} color={"#F9FAFB"} />
        </Link>
        <Text className="flex-1 text-center text-main_white font-black text-[32px]">
          {title}
        </Text>
      </View>
      {children}
    </View>
  );
}
