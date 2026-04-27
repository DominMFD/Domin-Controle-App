import { Medicine } from "@/services/models/Medicine";

export type MedicineListProps = {
  medicines: Medicine[];
  onEdit: (medicine: Medicine) => void;
};
