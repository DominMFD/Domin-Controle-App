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

export const EditMedicineSchema = z.object({
  name: z.string({ message: "Nome é obrigatório" }),
  dosage: z.number({ message: "Dosagem é obrigatória" }),
  image: z.custom<{ uri: string; name: string; type: string } | string>(
    val => {
      if (val === undefined || val === null) return false;
      if (typeof val === "string") return true;
      if (
        typeof val === "object" &&
        "uri" in val &&
        "name" in val &&
        "type" in val
      )
        return true;
      return false;
    },
    { message: "Imagem é obrigatória" },
  ),
  description: z.string({ message: "Prescrição é obrigatório" }),
});

export type EditMedicineSchemaType = z.infer<typeof EditMedicineSchema>;
