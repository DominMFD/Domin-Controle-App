import { z } from "zod";

export const ExamSchema = z
  .object({
    dataString: z.string().refine(val => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
      message: "Formato inválido. Use DD/MM/AAAA",
    }),
    data: z.date().optional(),
    hematocrito: z.number().optional(),
    rni: z.number().optional(),
    marevan: z.string(),
  })
  .superRefine((data, ctx) => {
    const [d, m, y] = data.dataString.split("/").map(Number);
    if (
      isNaN(d) ||
      isNaN(m) ||
      isNaN(y) ||
      m < 1 ||
      m > 12 ||
      d < 1 ||
      d > 31
    ) {
      ctx.addIssue({
        path: ["dataString"], // erro associado ao campo dataString
        code: z.ZodIssueCode.custom,
        message: "Data inválida",
      });
    }
  })
  .transform(data => {
    const [d, m, y] = data.dataString.split("/").map(Number);
    const date = new Date(y, m - 1, d);
    return { ...data, data: date };
  });

export type RawInput = z.input<typeof ExamSchema>;

export type ExamSchemaType = z.infer<typeof ExamSchema>;
