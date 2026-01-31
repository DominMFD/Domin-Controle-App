import api from "../api";
import { AddMedicine } from "../models/Medicine";

export const MedicineAdapter = {
  async addMedicine(medicine: AddMedicine) {
    try {
      const formData = new FormData();

      formData.append("Name", medicine.name);
      formData.append("Dosage", String(medicine.dosage));
      formData.append("Description", medicine.description);

      formData.append("Image", {
        uri: medicine.image.uri,
        name: medicine.image.name ?? "image.jpg",
        type: medicine.image.type ?? "image/jpeg",
      } as any);

      await api.post("/medicine", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch {
      throw new Error("erro ao criar remédio");
    }
  },

  async listAllMedicine() {
    try {
      return await api.get("/medicine");
    } catch {
      throw new Error("erro ao listar remédio");
    }
  },
};
