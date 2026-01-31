import { MedicineService } from "@/services/MedicineService";
import { useQuery } from "@tanstack/react-query";

export function useMedicineQuery() {
  const listMedicineQuery = useQuery({
    queryKey: ["list-medicines"],
    queryFn: () => MedicineService.listAllMedicine(),
  });

  return {
    listMedicineQuery,
  };
}
