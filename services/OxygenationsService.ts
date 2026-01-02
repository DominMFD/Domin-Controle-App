import { IOrder } from "@/types/Order.types";
import { OxygenationsAdapter } from "./adapters/OxygenationsAdapter";

export const OxygenationsService = {
  async addOxygenation() {},

  async listOxygenations(sortBy: string, order: IOrder) {
    return OxygenationsAdapter.listOxygenations(sortBy, order);
  },
};
