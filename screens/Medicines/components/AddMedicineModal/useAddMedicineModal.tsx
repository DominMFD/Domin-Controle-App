import { useForm } from "react-hook-form";
import {
  MedicineSchema,
  MedicineSchemaType,
} from "../MedicineForm/MedicineSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useAddMedicineModal() {
  const methods = useForm<MedicineSchemaType>({
    resolver: zodResolver(MedicineSchema),
  });

  return {
    methods,
  };
}
