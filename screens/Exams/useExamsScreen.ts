import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { useExamMutation } from "./useExamMutation";

export function useExamsScreen() {
  const { deleteExamMutation } = useExamMutation();
  const opacity = useRef(new Animated.Value(1)).current;

  const handleRemoveExam = async () => {
    await deleteExamMutation.mutateAsync();
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
    handleRemoveExam,
  };
}
