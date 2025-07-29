import { useExamsScreenStore } from "@/screens/Exams/useExamsScreenStore";
import { ExamsSortBy } from "@/types/ExamsSortBy.types";
import { queryClient } from "@/utils/queryClient";

type HandleToggleOrdenationProps = {
  newSortBy: string;
};

export default function useFieldOrdering() {
  const { order, sortBy, setOrder, setSortBy } = useExamsScreenStore();

  const handleToggleOrdenation = ({
    newSortBy,
  }: HandleToggleOrdenationProps) => {
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
