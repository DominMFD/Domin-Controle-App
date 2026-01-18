import z from "zod";

export const MedicineSchema = z.object({
  name: z.string({
    message: "Nome é obrigatório",
  }),

  dosage: z.number({
    message: "Dosagem é obrigatória",
  }),

  image: z.object(
    {
      uri: z.string(),
      name: z.string(),
      type: z.string(),
    },
    { message: "Imagem é obrigatória" },
  ),

  description: z.string({
    message: "Prescrição é obrigatório",
  }),
});

export type MedicineSchemaType = z.infer<typeof MedicineSchema>;
