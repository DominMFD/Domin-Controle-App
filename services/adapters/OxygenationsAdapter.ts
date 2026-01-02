import { IOrder } from "@/types/Order.types";
import api from "../api";

export const OxygenationsAdapter = {
  async addOxygenation() {},

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
