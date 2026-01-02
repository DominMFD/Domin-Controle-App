import z from "zod/v3";

export const OxygenationSchema = z
  .object({
    dataString: z
      .string({ required_error: "Data é obrigatório" })
      .refine(val => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
        message: "Formato inválido. Use DD/MM/AAAA",
      }),
    data: z.date().optional(),
    time: z.any(),
    value: z.preprocess(
      val => (val === "" || val == null ? undefined : Number(val)),
      z.number().optional(),
    ),
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

export type RawInput = z.input<typeof OxygenationSchema>;

export type OxygenationSchemaType = z.infer<typeof OxygenationSchema>;
