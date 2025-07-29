import { IOrder } from "@/types/Order.types";

export type Fields = "DATE" | "RNI" | "MARE" | "HEMA";

export type FieldOrderingProps = {
  fields: Fields[];
  order: IOrder;
  sortBy: string;
};
