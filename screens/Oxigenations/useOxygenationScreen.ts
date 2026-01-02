import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

export function useOxygenationsScreen() {
  const opacity = useRef(new Animated.Value(1)).current;

  const handleRemoveOxygenation = async () => {};

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();

    return () => loop.stop();
  }, [opacity]);

  return {
    opacity,
    handleRemoveOxygenation,
  };
}
