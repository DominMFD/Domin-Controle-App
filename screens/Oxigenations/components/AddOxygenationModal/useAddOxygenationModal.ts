import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import {
  OxygenationSchema,
  OxygenationSchemaType,
  RawInput,
} from "./useOxygenationSchema";
import { useOxygenationMutation } from "../../useOxygenationMutation";

export function useAddOxygenationModal() {
  const { addOxygenationMutation } = useOxygenationMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RawInput>({
    resolver: zodResolver(OxygenationSchema),
  });

  const handleChange = (text: string) => {
    let cleaned = text.replace(/\D/g, "");
    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);
    if (cleaned.length > 4)
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    if (cleaned.length > 2) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return cleaned;
  };

  const formatTime = (value: string) => {
    const clean = value.replace(/\D/g, "");
    const truncated = clean.slice(0, 4);
    if (truncated.length >= 3) {
      return `${truncated.slice(0, 2)}:${truncated.slice(2)}`;
    }

    return truncated;
  };

  const onOxygenationSubmit = async (data: OxygenationSchemaType) => {
    await addOxygenationMutation.mutateAsync({
      date: data.data,
      value: data.value,
    });

    reset();
  };

  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let loop: Animated.CompositeAnimation | null = null;

    if (addOxygenationMutation.isPending) {
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
  }, [addOxygenationMutation.isPending, opacity]);

  return {
    control,
    handleSubmit,
    reset,
    errors,
    onOxygenationSubmit,
    handleChange,
    formatTime,
    addOxygenationMutation,
    opacity,
  };
}
