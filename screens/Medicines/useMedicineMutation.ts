import { useMutation } from "@tanstack/react-query";
import { useMedicineModalStore } from "./useMedicineModalStore";
import { AddMedicine, EditMedicine } from "@/services/models/Medicine";
import { MedicineService } from "@/services/MedicineService";
import { queryClient } from "@/utils/queryClient";
import Toast from "react-native-toast-message";

export function useMedicineMutation() {
  const { toggleModal, toggleDeleteModal, setSelectedMedicine } =
    useMedicineModalStore();

  const addMedicineMutation = useMutation<void, Error, AddMedicine>({
    mutationFn: async (medicine: AddMedicine) => {
      await MedicineService.addMedicine(medicine);
    },
    onError: (error: Error) => {
      console.log("Deu erro:", error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["list-medicines"] });
      toggleModal();
      Toast.show({
        type: "success",
        text1: "Remédio adicionado!",
        text2: "Remédio adicionado com sucesso",
      });
    },
  });

  const editMedicineMutation = useMutation<void, Error, EditMedicine>({
    mutationFn: async (medicine: EditMedicine) => {
      await MedicineService.editMedicine(medicine);
    },
    onError: (error: Error) => {
      console.log("Deu erro:", error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["list-medicines"] });
      toggleModal();
      Toast.show({
        type: "success",
        text1: "Remédio atualizado!",
        text2: "Remédio atualizado com sucesso",
      });
    },
  });

  const deleteMedicineMutation = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await MedicineService.deleteMedicine(id);
    },
    onError: (error: Error) => {
      console.log("Deu erro:", error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["list-medicines"] });
      toggleModal();
      toggleDeleteModal();
      setSelectedMedicine(null);
      Toast.show({
        type: "success",
        text1: "Remédio excluído!",
        text2: "Remédio excluído com sucesso",
      });
    },
  });

  return {
    addMedicineMutation,
    editMedicineMutation,
    deleteMedicineMutation,
  };
}
