import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { useOxygenationMutation } from "./useOxygenationMutation";

export function useOxygenationsScreen() {
  const { deleteOxygenationMutation } = useOxygenationMutation();
  const opacity = useRef(new Animated.Value(1)).current;

  const handleRemoveOxygenation = async () => {
    await deleteOxygenationMutation.mutateAsync();
  };

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
