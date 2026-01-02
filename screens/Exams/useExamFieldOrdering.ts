import { ToggleOrdenation } from "@/components/FieldOrdering/FieldOrdering.types";
import { useExamsScreenStore } from "@/screens/Exams/useExamsScreenStore";
import { ExamsSortBy } from "@/types/ExamsSortBy.types";
import { queryClient } from "@/utils/queryClient";

export default function useExamFieldOrdering() {
  const { order, sortBy, setOrder, setSortBy } = useExamsScreenStore();

  const handleToggleOrdenation = ({ newSortBy }: ToggleOrdenation) => {
    if (sortBy === newSortBy) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setSortBy(newSortBy);
      setOrder("asc");
    }

    queryClient.invalidateQueries({
      queryKey: ["list-exams"],
    });
  };

  return {
    handleToggleOrdenation,
  };
}
