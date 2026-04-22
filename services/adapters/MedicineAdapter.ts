import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";
import { AddMedicine, Medicine } from "../models/Medicine";

const COLLECTION = "medicines";

export const MedicineAdapter = {
  async addMedicine(medicine: AddMedicine) {
    try {
      const imageRef = ref(
        storage,
        `medicines/${Date.now()}_${medicine.image.name ?? "image.jpg"}`,
      );

      const fetchResponse = await fetch(medicine.image.uri);
      const blob = await fetchResponse.blob();
      await uploadBytes(imageRef, blob);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, COLLECTION), {
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
      const snapshot = await getDocs(collection(db, COLLECTION));
      return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as Medicine);
    } catch {
      throw new Error("erro ao listar remédios");
    }
  },
};
