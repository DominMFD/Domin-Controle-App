import { ExamsService } from "@/services/ExamsService";
import { AddExam, Exam } from "@/services/models/Exam";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Toast from "react-native-toast-message";
import { queryClient } from "@/utils/queryClient";
import { useOxigenationsScreenStore } from "./useOxigenationScreenStore";
import { useOxigenationModalStore } from "./useOxygenationModalStore";
import { AddOxygenation } from "@/services/models/Oxygenation";
import { OxygenationsService } from "@/services/OxygenationsService";

export function useOxygenationMutation() {
  const { toggleModal, toggleDeleteModal } = useOxigenationModalStore();
  const { idForDelete } = useOxigenationsScreenStore();

  const addOxygenationMutation = useMutation<void, AxiosError, AddOxygenation>({
    mutationFn: async (exam: AddOxygenation) => {
      await OxygenationsService.addOxygenation(exam);
    },
    onError: (error: AxiosError) => {
      console.log("Deu erro:", error.response?.data ?? error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list-oxigenations"],
      });
      toggleModal();
      Toast.show({
        type: "success",
        text1: "Oxigenação adicionado!",
        text2: "Oxigenação adicionado com sucesso",
      });
    },
  });

  const deleteOxygenationMutation = useMutation({
    mutationFn: async () => {
      if (idForDelete) {
        await OxygenationsService.deleteOxygenation(idForDelete);
      }
    },
    onError: (error: AxiosError) => {
      console.log("Deu erro:", error.response?.data ?? error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list-oxigenations"],
      });
      toggleDeleteModal();
      Toast.show({
        type: "success",
        text1: "Oxigenação removido!",
        text2: "Oxigenação removido com sucesso",
      });
    },
  });

  return {
    addOxygenationMutation,
    deleteOxygenationMutation,
  };
}
