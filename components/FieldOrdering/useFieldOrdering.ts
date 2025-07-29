import { useExamsScreenStore } from "@/screens/Exams/useExamsScreenStore";
import { ExamsSortBy } from "@/types/ExamsSortBy.types";

type HandleToggleOrdenationProps = {
  newSortBy: ExamsSortBy;
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
  };

  return {
    handleToggleOrdenation,
  };
}
