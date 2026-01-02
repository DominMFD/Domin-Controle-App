import { useOxigenationsScreenStore } from "./useOxigenationScreenStore";
import { OxygenationsService } from "@/services/OxygenationsService";
import { useQuery } from "@tanstack/react-query";

export function useOxygenationQuery() {
  const { order, sortBy } = useOxigenationsScreenStore();

  const listOxygenationQuery = useQuery({
    queryKey: ["list-oxigenations"],
    queryFn: () => OxygenationsService.listOxygenations(sortBy, order),
  });

  return {
    listOxygenationQuery,
  };
}
