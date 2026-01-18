import api from "../api";
import { AddMedicine } from "../models/Medicine";

export const MedicineAdapter = {
  async addMedicine(medicine: AddMedicine) {
    try {
      const formData = new FormData();

      formData.append("Name", medicine.name);

      const response = api.post("/medicine", formData, {});
    } catch {
      throw new Error("erro ao criar remédio");
    }
  },
};
