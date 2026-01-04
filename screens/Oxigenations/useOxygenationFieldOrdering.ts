import { ToggleOrdenation } from "@/components/FieldOrdering/FieldOrdering.types";
import { queryClient } from "@/utils/queryClient";
import { useOxigenationsScreenStore } from "./useOxigenationScreenStore";

export default function useOxygenationFieldOrdering() {
  const { order, sortBy, setOrder, setSortBy } = useOxigenationsScreenStore();

  const handleToggleOrdenation = ({ newSortBy }: ToggleOrdenation) => {
    if (sortBy === newSortBy) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setSortBy(newSortBy);
      setOrder("asc");
    }

    queryClient.invalidateQueries({
      queryKey: ["list-oxigenations"],
    });
  };

  return {
    handleToggleOrdenation,
  };
}
