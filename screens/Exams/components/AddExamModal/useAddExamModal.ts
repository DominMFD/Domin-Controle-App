import { useForm } from "react-hook-form";
import { ExamSchema, ExamSchemaType, RawInput } from "./AddExamSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { useExamMutation } from "../../useExamMutation";

export function useAddExamModal() {
  const { addExamMutation } = useExamMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RawInput>({
    resolver: zodResolver(ExamSchema),
  });

  const handleChange = (text: string) => {
    let cleaned = text.replace(/\D/g, "");
    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);
    if (cleaned.length > 4)
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    if (cleaned.length > 2) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return cleaned;
  };

  const onExamSubmit = async (data: ExamSchemaType) => {
    await addExamMutation.mutateAsync({
      date: data.data,
      hematocrito: data.hematocrito,
      marevan: data.marevan,
      rni: data.rni,
    });
  };

  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let loop: Animated.CompositeAnimation | null = null;

    if (addExamMutation.isPending) {
      loop = Animated.loop(
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
    } else {
      opacity.setValue(1);
      loop?.stop();
    }

    return () => loop?.stop();
  }, [addExamMutation.isPending, opacity]);

  return {
    control,
    handleSubmit,
    reset,
    errors,
    onExamSubmit,
    handleChange,
    addExamMutation,
    opacity,
  };
}
