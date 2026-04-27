import { Medicine } from "@/services/models/Medicine";

export type MedicineItemProps = {
  medicine: Medicine;
  onEdit: (medicine: Medicine) => void;
};
