import { ExamsService } from "@/services/ExamsService";
import { AddExam, Exam } from "@/services/models/Exam";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Toast from "react-native-toast-message";
import { queryClient } from "@/utils/queryClient";
import { useExamModalStore } from "./useExamModalStore";
import { useExamsScreenStore } from "./useExamsScreenStore";

export function useExamMutation() {
  const { toggleModal, toggleDeleteModal } = useExamModalStore();
  const { idForDelete } = useExamsScreenStore();

  const addExamMutation = useMutation<void, AxiosError, AddExam>({
    mutationFn: async (exam: AddExam) => {
      await ExamsService.addExam(exam);
    },
    onError: (error: AxiosError) => {
      console.log("Deu erro:", error.response?.data ?? error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list-exams"],
      });
      toggleModal();
      Toast.show({
        type: "success",
        text1: "Exame adicionado!",
        text2: "Exame adicionado com sucesso",
      });
    },
  });

  const deleteExamMutation = useMutation({
    mutationFn: async () => {
      if (idForDelete) {
        await ExamsService.removeExam(idForDelete);
      }
    },
    onError: (error: AxiosError) => {
      console.log("Deu erro:", error.response?.data ?? error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list-exams"],
      });
      toggleDeleteModal();
      Toast.show({
        type: "success",
        text1: "Exame removido!",
        text2: "Exame removido com sucesso",
      });
    },
  });

  return {
    addExamMutation,
    deleteExamMutation,
  };
}
