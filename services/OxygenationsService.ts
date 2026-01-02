import { IOrder } from "@/types/Order.types";
import { OxygenationsAdapter } from "./adapters/OxygenationsAdapter";
import { AddOxygenation } from "./models/Oxygenation";

export const OxygenationsService = {
  async addOxygenation(oxygenation: AddOxygenation) {
    return OxygenationsAdapter.addOxygenation(oxygenation);
  },

  async listOxygenations(sortBy: string, order: IOrder) {
    return OxygenationsAdapter.listOxygenations(sortBy, order);
  },
};
