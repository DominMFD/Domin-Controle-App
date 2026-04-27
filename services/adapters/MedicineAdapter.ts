import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { AddMedicine, EditMedicine, Medicine } from "../models/Medicine";

const COLLECTION = "medicines";

export const MedicineAdapter = {
  async addMedicine(medicine: AddMedicine) {
    try {
      if (!auth().currentUser) {
        await auth().signInAnonymously();
      }

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
    } catch (error) {
      throw new Error("erro ao criar remédio: " + error);
    }
  },

  async listAllMedicine(): Promise<Medicine[]> {
    try {
      const snapshot = await firestore().collection(COLLECTION).get();
      return snapshot.docs.map(
        doc => ({ id: doc.id, ...doc.data() }) as Medicine,
      );
    } catch {
      throw new Error("erro ao listar remédios");
    }
  },

  async editMedicine(medicine: EditMedicine): Promise<void> {
    try {
      const { id, image, ...rest } = medicine;
      let imageUrl: string;

      if (typeof image === "string") {
        imageUrl = image;
      } else {
        const filename = `medicines/${Date.now()}_${image.name ?? "image.jpg"}`;
        const ref = storage().ref(filename);
        await ref.putFile(image.uri);
        imageUrl = await ref.getDownloadURL();
      }

      await firestore()
        .collection(COLLECTION)
        .doc(id)
        .update({
          ...rest,
          image: imageUrl,
        });
    } catch (error) {
      throw new Error("erro ao editar remédio: " + error);
    }
  },

  async deleteMedicine(id: string): Promise<void> {
    try {
      await firestore().collection(COLLECTION).doc(id).delete();
    } catch {
      throw new Error("erro ao deletar remédio");
    }
  },
};
