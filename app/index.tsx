import { useRouter } from "expo-router";
import React, { useEffect, useRef, } from "react";
import { View, SafeAreaView, Animated, Easing } from "react-native";
import CoracaoDeVidro from "../assets/images/Coração_de_vidro.png";
import MainButton from "../components/MainButton/MainButton";

export default function Home() {
  const link = useRouter();
  const pulse = useRef(new Animated.Value(1)).current

  const handleToExams = () => {
    link.push("/(tabs)");
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(pulse, {
        toValue: 1.05,
        duration: 900,
        easing: Easing.circle,
        useNativeDriver: true,
      }),
    ).start();
  }, [pulse]);

  return (
    <SafeAreaView className="bg-primary_background flex-1 justify-start">
        <View className="w-full -mt-10">
          <Animated.Image
            className="w-3/6 object-auto m-auto"
            style={{ resizeMode: "contain", transform: [{scale: pulse}]}}
            source={CoracaoDeVidro}
          />
        </View>
        <View className="justify-center items-center p-10 gap-5 -mt-20">
          <MainButton text="Exames" onPress={handleToExams} />
          <MainButton text="Oxigenação" onPress={() => {}} />
          <MainButton text="Remédios" onPress={() => {}} />
        </View>
    </SafeAreaView>
  );
}
