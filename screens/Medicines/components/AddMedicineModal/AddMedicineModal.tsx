import AddModalTemplate from "@/components/AddModalTemplate/AddModalTemplate";
import React from "react";
import { FormProvider } from "react-hook-form";
import { View } from "react-native";
import { useAddMedicineModal } from "./useAddMedicineModal";
import MedicineForm from "../MedicineForm/MedicineForm";
import MainButton from "@/components/MainButton/MainButton";
import { useMedicineModalStore } from "../../useMedicineModalStore";

export default function AddMedicineModal() {
  const { methods } = useAddMedicineModal();
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
          <MainButton title="Adicionar" variant="default" />
        </FormProvider>
      </View>
    </AddModalTemplate>
  );
}
