import { IOrder } from "@/types/Order.types";

export type Fields = "DATE" | "RNI" | "MARE" | "HEMA" | "VALUE" | "TIME";

export type FieldOrderingProps = {
  fields: Fields[];
  order: IOrder;
  sortBy: string;
  onToggleOrdenation: ({ newSortBy }: ToggleOrdenation) => void;
};

export type ToggleOrdenation = {
  newSortBy: string;
};
