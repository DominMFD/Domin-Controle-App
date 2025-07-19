import { ExamsService } from "@/services/ExamsService";
import { useQuery } from "@tanstack/react-query";

export function useExamQuery() {
  const listExamQuery = useQuery({
    queryKey: ["list-exams"],
    queryFn: () => ExamsService.listExams(),
  });

  return {
    listExamQuery,
  };
}
