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

      const response = await api.post("/medicine", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
    } catch {
      throw new Error("erro ao criar remédio");
    }
  },
};
