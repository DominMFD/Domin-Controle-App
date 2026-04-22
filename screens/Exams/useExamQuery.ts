import { ExamsService } from "@/services/ExamsService";
import { useQuery } from "@tanstack/react-query";
import { useExamsScreenStore } from "./useExamsScreenStore";

export function useExamQuery() {
  const { order, sortBy } = useExamsScreenStore();

  const listExamQuery = useQuery({
    queryKey: ["list-exams", sortBy, order],
    queryFn: () => ExamsService.listExams(sortBy, order),
  });

  return {
    listExamQuery,
  };
}
