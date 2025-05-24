import { Link, useRouter } from "expo-router";
import { useRef, useEffect } from "react";
import { Animated, Easing, SafeAreaView, View } from "react-native";

import { ButtonLink } from "./components/ButtonLink/ButtonLink";
import CoracaoDeVidro from "../../assets/images/Coração_de_vidro.png";

export function HomeScreen() {
  const link = useRouter();
  const pulse = useRef(new Animated.Value(1)).current;

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
      <View>
        <Animated.Image
          className="w-3/6 object-auto m-auto"
          style={{ resizeMode: "contain", transform: [{ scale: pulse }] }}
          source={CoracaoDeVidro}
        />
      </View>
      <View className="justify-center items-center flex-1">
        <View className="justify-start items-center gap-5 flex-1 w-full max-w-80">
          <ButtonLink href="/(tabs)/exams" LinkComponent={Link}>
            Exames
          </ButtonLink>
          <ButtonLink href="/(tabs)/oxigenation" LinkComponent={Link}>
            Oxigenação
          </ButtonLink>
          <ButtonLink href="/(tabs)/medicines" LinkComponent={Link}>
            Remédios
          </ButtonLink>
        </View>
      </View>
    </SafeAreaView>
  );
}
