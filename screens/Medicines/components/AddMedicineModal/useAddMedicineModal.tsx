import { useForm } from "react-hook-form";
import {
  EditMedicineSchema,
  EditMedicineSchemaType,
} from "../MedicineForm/MedicineSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMedicineMutation } from "../../useMedicineMutation";
import { useMedicineModalStore } from "../../useMedicineModalStore";
import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export function useAddMedicineModal() {
  const { addMedicineMutation, editMedicineMutation } = useMedicineMutation();
  const { selectedMedicine } = useMedicineModalStore();

  const isEditing = selectedMedicine !== null;

  const methods = useForm<EditMedicineSchemaType>({
    resolver: zodResolver(EditMedicineSchema),
    defaultValues: {
      name: "",
      description: "",
      dosage: 0,
      image: undefined,
    },
  });

  useEffect(() => {
    if (selectedMedicine) {
      methods.reset({
        name: selectedMedicine.name,
        description: selectedMedicine.description,
        dosage: selectedMedicine.dosage,
        image: selectedMedicine.image,
      });
    } else {
      methods.reset({
        name: "",
        description: "",
        dosage: 0,
        image: undefined,
      });
    }
  }, [selectedMedicine]);

  const onMedicineSubmit = async (data: EditMedicineSchemaType) => {
    await addMedicineMutation.mutateAsync({
      name: data.name,
      dosage: data.dosage,
      description: data.description,
      image: data.image as { uri: string; name: string; type: string },
    });
    methods.reset();
  };

  const onMedicineEdit = async (data: EditMedicineSchemaType) => {
    if (!selectedMedicine) return;
    await editMedicineMutation.mutateAsync({
      id: selectedMedicine.id,
      name: data.name,
      dosage: data.dosage,
      description: data.description,
      image: data.image,
    });
    methods.reset();
  };

  const opacity = useRef(new Animated.Value(1)).current;
  const isPending =
    addMedicineMutation.isPending || editMedicineMutation.isPending;

  useEffect(() => {
    let loop: Animated.CompositeAnimation | null = null;

    if (isPending) {
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
  }, [isPending, opacity]);

  return {
    methods,
    onMedicineSubmit,
    onMedicineEdit,
    opacity,
    isPending,
    isEditing,
    addMedicineMutation,
    editMedicineMutation,
  };
}
