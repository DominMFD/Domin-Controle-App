import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { AddOxygenation, Oxygenation } from "../models/Oxygenation";
import { IOrder } from "@/types/Order.types";

const COLLECTION = "oxygenations";

export const OxygenationsAdapter = {
  async addOxygenation(oxygenation: AddOxygenation) {
    try {
      await addDoc(collection(db, COLLECTION), oxygenation);
    } catch {
      throw new Error("erro ao criar oxigenação");
    }
  },

  async listOxygenations(sortBy: string, order: IOrder): Promise<Oxygenation[]> {
    try {
      const q = query(collection(db, COLLECTION), orderBy(sortBy, order));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as Oxygenation);
    } catch {
      throw new Error("erro ao listar as oxigenações");
    }
  },

  async deleteOxygenation(id: Oxygenation["id"]) {
    try {
      await deleteDoc(doc(db, COLLECTION, id));
    } catch {
      throw new Error("erro ao deletar oxigenação");
    }
  },
};
