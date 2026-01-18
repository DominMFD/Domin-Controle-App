import { MedicineAdapter } from "./adapters/MedicineAdapter";
import { AddMedicine } from "./models/Medicine";

export const MedicineService = {
  async addMedicine(medicine: AddMedicine) {
    return MedicineAdapter.addMedicine(medicine);
  },
};
