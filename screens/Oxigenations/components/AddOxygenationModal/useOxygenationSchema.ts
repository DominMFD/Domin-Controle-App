import z from "zod"; // ou "zod/v3" conforme seu projeto

export const OxygenationSchema = z
  .object({
    dataString: z
      .string({ message: "Data é obrigatório" })
      .refine(val => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
        message: "Formato inválido. Use DD/MM/AAAA",
      }),
    time: z
      .string({ message: "Hora é obrigatório" })
      .min(5, "Preencha a hora completa")
      .refine(val => {
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val);
      }, "Hora inválida (HH:mm)"),

    data: z.date().optional(),

    value: z.number(),
  })
  .superRefine((data, ctx) => {
    const [d, m, y] = data.dataString.split("/").map(Number);

    const isValidDate =
      !isNaN(d) &&
      !isNaN(m) &&
      !isNaN(y) &&
      m >= 1 &&
      m <= 12 &&
      d >= 1 &&
      d <= 31;

    if (!isValidDate) {
      ctx.addIssue({
        path: ["dataString"],
        code: z.ZodIssueCode.custom,
        message: "Data inválida",
      });
      return;
    }

    const dateCheck = new Date(y, m - 1, d);
    if (dateCheck.getMonth() !== m - 1) {
      ctx.addIssue({
        path: ["dataString"],
        code: z.ZodIssueCode.custom,
        message: "Dia inexistente neste mês",
      });
    }
  })
  .transform(data => {
    const [d, m, y] = data.dataString.split("/").map(Number);
    const [hours, minutes] = data.time.split(":").map(Number);

    const finalDate = new Date(y, m - 1, d, hours, minutes);

    return {
      ...data,
      data: finalDate,
    };
  });

export type RawInput = z.input<typeof OxygenationSchema>;
export type OxygenationSchemaType = z.infer<typeof OxygenationSchema>;
