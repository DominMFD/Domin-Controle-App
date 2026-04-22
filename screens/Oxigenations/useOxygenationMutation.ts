import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { queryClient } from "@/utils/queryClient";
import { useOxigenationsScreenStore } from "./useOxigenationScreenStore";
import { useOxigenationModalStore } from "./useOxygenationModalStore";
import { AddOxygenation } from "@/services/models/Oxygenation";
import { OxygenationsService } from "@/services/OxygenationsService";

export function useOxygenationMutation() {
  const { toggleModal, toggleDeleteModal } = useOxigenationModalStore();
  const { idForDelete } = useOxigenationsScreenStore();

  const addOxygenationMutation = useMutation<void, Error, AddOxygenation>({
    mutationFn: async (oxygenation: AddOxygenation) => {
      await OxygenationsService.addOxygenation(oxygenation);
    },
    onError: (error: Error) => {
      console.log("Deu erro:", error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list-oxigenations"],
      });
      toggleModal();
      Toast.show({
        type: "success",
        text1: "Oxigenação adicionada!",
        text2: "Oxigenação adicionada com sucesso",
      });
    },
  });

  const deleteOxygenationMutation = useMutation({
    mutationFn: async () => {
      if (idForDelete) {
        await OxygenationsService.deleteOxygenation(idForDelete);
      }
    },
    onError: (error: Error) => {
      console.log("Deu erro:", error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list-oxigenations"],
      });
      toggleDeleteModal();
      Toast.show({
        type: "success",
        text1: "Oxigenação removida!",
        text2: "Oxigenação removida com sucesso",
      });
    },
  });

  return {
    addOxygenationMutation,
    deleteOxygenationMutation,
  };
}
