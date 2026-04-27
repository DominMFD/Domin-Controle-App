import z from "zod/v3";

export const ExamSchema = z
  .object({
    dataString: z
      .string({ required_error: "Data é obrigatório" })
      .refine(val => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
        message: "Formato inválido. Use DD/MM/AAAA",
      }),
    data: z.date().optional(),
    hematocrito: z.preprocess(
      val => (val === "" || val == null ? undefined : Number(val)),
      z.number().optional(),
    ),
    rni: z.preprocess(
      val => (val === "" || val == null ? undefined : Number(val)),
      z.number().optional(),
    ),
    marevan: z.string({ required_error: "Marevan é obrigatório" }),
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
        path: ["dataString"],
        code: z.ZodIssueCode.custom,
        message: "Data inválida",
      });
    }
  })
  .transform(data => {
    const [d, m, y] = data.dataString.split("/").map(Number);
    return { ...data, data: new Date(y, m - 1, d) };
  });

export type RawInput = z.input<typeof ExamSchema>;

export type ExamSchemaType = z.infer<typeof ExamSchema>;
