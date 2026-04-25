import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { AddMedicine, Medicine } from "../models/Medicine";

const COLLECTION = "medicines";

export const MedicineAdapter = {
  async addMedicine(medicine: AddMedicine) {
    try {
      const filename = `medicines/${Date.now()}_${medicine.image.name ?? "image.jpg"}`;
      const ref = storage().ref(filename);
      await ref.putFile(medicine.image.uri);
      const imageUrl = await ref.getDownloadURL();

      await firestore().collection(COLLECTION).add({
        name: medicine.name,
        dosage: medicine.dosage,
        description: medicine.description,
        image: imageUrl,
      });
    } catch {
      throw new Error("erro ao criar remédio");
    }
  },

  async listAllMedicine(): Promise<Medicine[]> {
    try {
      const snapshot = await firestore().collection(COLLECTION).get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Medicine);
    } catch {
      throw new Error("erro ao listar remédios");
    }
  },
};
