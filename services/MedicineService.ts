import { MedicineAdapter } from "./adapters/MedicineAdapter";
import { AddMedicine, EditMedicine } from "./models/Medicine";

export const MedicineService = {
  async addMedicine(medicine: AddMedicine) {
    return MedicineAdapter.addMedicine(medicine);
  },

  async listAllMedicine() {
    return MedicineAdapter.listAllMedicine();
  },

  async editMedicine(medicine: EditMedicine) {
    return MedicineAdapter.editMedicine(medicine);
  },

  async deleteMedicine(id: string) {
    return MedicineAdapter.deleteMedicine(id);
  },
};
