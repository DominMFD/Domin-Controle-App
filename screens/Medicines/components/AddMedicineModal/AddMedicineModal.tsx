import AddModalTemplate from "@/components/AddModalTemplate/AddModalTemplate";
import React from "react";
import { FormProvider } from "react-hook-form";
import { Animated, View } from "react-native";
import { useAddMedicineModal } from "./useAddMedicineModal";
import MedicineForm from "../MedicineForm/MedicineForm";
import MainButton from "@/components/MainButton/MainButton";
import { useMedicineModalStore } from "../../useMedicineModalStore";
import { MedicinesIcon } from "@/assets/images/icons/MedicinesIcon";

export default function AddMedicineModal() {
  const { methods, addMedicineMutation, onMedicineSubmit, opacity } =
    useAddMedicineModal();
  const { modalOpen, toggleModal } = useMedicineModalStore();

  return (
    <AddModalTemplate
      title="Adicionar Remédio"
      modalOpen={modalOpen}
      toggleModal={toggleModal}
    >
      <View className="bg-primary_background px-5 py-4 rounded-t-[20px] gap-[6px]">
        <FormProvider {...methods}>
          <MedicineForm />
          <MainButton
            title="Adicionar"
            variant="default"
            onPress={methods.handleSubmit(onMedicineSubmit)}
          />
        </FormProvider>
        <View className="p-[10.5] justify-center w-full items-center opacity-60">
          <View className="w-[42px] h-[42px]">
            {addMedicineMutation.isPending && (
              <Animated.View style={{ opacity }}>
                <MedicinesIcon width={42} height={42} color="#B22222" />
              </Animated.View>
            )}
          </View>
        </View>
      </View>
    </AddModalTemplate>
  );
}
