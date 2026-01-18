import { FileAdapter } from "@/types/File.types";

export interface Medicine {
  id: string;
  name: string;
  image: string;
  dosage: number;
  description: string;
}

export type AddMedicine = Omit<
  Omit<Medicine, "image"> & { image: FileAdapter },
  "id"
>;
