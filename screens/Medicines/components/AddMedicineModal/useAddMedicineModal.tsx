import { useForm } from "react-hook-form";
import {
  MedicineSchema,
  MedicineSchemaType,
} from "../MedicineForm/MedicineSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMedicineMutation } from "../../useMedicineMutation";
import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export function useAddMedicineModal() {
  const { addMedicineMutation } = useMedicineMutation();
  const methods = useForm<MedicineSchemaType>({
    resolver: zodResolver(MedicineSchema),
    defaultValues: {
      name: "",
      description: "",
      dosage: 0,
      image: undefined,
    },
  });

  const onMedicineSubmit = async (data: MedicineSchemaType) => {
    await addMedicineMutation.mutateAsync(data);

    methods.reset();
  };

  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let loop: Animated.CompositeAnimation | null = null;

    if (addMedicineMutation.isPending) {
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
  }, [addMedicineMutation.isPending, opacity]);

  return {
    methods,
    onMedicineSubmit,
    opacity,
    addMedicineMutation,
  };
}
