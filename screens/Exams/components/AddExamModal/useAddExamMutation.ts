import { ExamsService } from "@/services/ExamsService";
import { Exam } from "@/services/models/Exam";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useExamModalStore } from "../../useExamModalStore";
import Toast from "react-native-toast-message";

export function useAddExamMutation() {
  const { toggleModal } = useExamModalStore();
  const addExamMutation = useMutation<void, AxiosError, Exam>({
    mutationFn: async (exam: Exam) => {
      await ExamsService.addExam(exam);
    },
    onError: (error: AxiosError) => {
      console.log("Deu erro:", error.response?.data ?? error.message);
    },
    onSuccess: () => {
      toggleModal();
      Toast.show({
        type: "success",
        text1: "Exame adicionado!",
        text2: "Exame adicionado com sucesso",
      });
    },
  });

  return {
    addExamMutation,
  };
}
