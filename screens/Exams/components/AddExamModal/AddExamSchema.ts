import { z } from "zod";

export const dateSchema = z
  .string()
  .refine(val => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
    message: "Formato inválido. Use DD/MM/AAAA",
  })
  .transform(val => {
    const [day, month, year] = val.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    if (isNaN(date.getTime())) {
      throw new Error("Data inválida");
    }

    return date;
  });
