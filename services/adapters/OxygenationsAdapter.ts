import { IOrder } from "@/types/Order.types";
import api from "../api";
import { AddOxygenation } from "../models/Oxygenation";

export const OxygenationsAdapter = {
  async addOxygenation(oxygenation: AddOxygenation) {
    try {
      const response = api.post("oxygenation", oxygenation);
      return response;
    } catch {
      throw new Error("erro ao criar exame");
    }
  },

  async listOxygenations(sortBy: string, order: IOrder) {
    try {
      const response = api.get("oxygenation", {
        params: { sortBy, order },
      });
      return response;
    } catch {
      throw new Error("erro ao listar as oxygenações");
    }
  },
};
