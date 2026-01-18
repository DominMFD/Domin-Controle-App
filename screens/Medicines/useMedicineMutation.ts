import { useMutation } from "@tanstack/react-query";
import { useMedicineModalStore } from "./useMedicineModalStore";
import { AddMedicine } from "@/services/models/Medicine";
import { MedicineService } from "@/services/MedicineService";
import { AxiosError } from "axios";
import { queryClient } from "@/utils/queryClient";
import Toast from "react-native-toast-message";

export function useMedicineMutation() {
  const { toggleModal } = useMedicineModalStore();

  const addMedicineMutation = useMutation<void, AxiosError, AddMedicine>({
    mutationFn: async (medicine: AddMedicine) => {
      await MedicineService.addMedicine(medicine);
    },
    onError: (error: AxiosError) => {
      console.log("Deu erro:", error?.response?.data ?? error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list-medicines"],
      });
      toggleModal();
      Toast.show({
        type: "success",
        text1: "Remédio adicionado!",
        text2: "Remédio adicionado com sucesso",
      });
    },
  });

  return {
    addMedicineMutation,
  };
}
