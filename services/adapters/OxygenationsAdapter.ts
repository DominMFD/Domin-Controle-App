import firestore from "@react-native-firebase/firestore";
import { AddOxygenation, Oxygenation } from "../models/Oxygenation";
import { IOrder } from "@/types/Order.types";

const COLLECTION = "oxygenations";

export const OxygenationsAdapter = {
  async addOxygenation(oxygenation: AddOxygenation) {
    try {
      await firestore().collection(COLLECTION).add(oxygenation);
    } catch {
      throw new Error("erro ao criar oxigenação");
    }
  },

  async listOxygenations(
    sortBy: string,
    order: IOrder,
  ): Promise<Oxygenation[]> {
    try {
      const snapshot = await firestore()
        .collection(COLLECTION)
        .orderBy(sortBy, order)
        .get();
      return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date: data.date?.toDate() ?? new Date(),
        } as Oxygenation;
      });
    } catch {
      throw new Error("erro ao listar as oxigenações");
    }
  },

  async deleteOxygenation(id: Oxygenation["id"]) {
    try {
      await firestore().collection(COLLECTION).doc(id).delete();
    } catch {
      throw new Error("erro ao deletar oxigenação");
    }
  },
};
