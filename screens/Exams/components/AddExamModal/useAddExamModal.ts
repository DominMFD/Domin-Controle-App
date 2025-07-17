import { useForm } from "react-hook-form";
import { ExamSchema, ExamSchemaType, RawInput } from "./AddExamSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useAddExamModal() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RawInput>({
    resolver: zodResolver(ExamSchema),
  });

  const handleChange = (text: string) => {
    let cleaned = text.replace(/\D/g, "");
    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);
    if (cleaned.length > 4)
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    if (cleaned.length > 2) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return cleaned;
  };

  const onExamSubmit = (data: ExamSchemaType) => {
    console.log(data);
  };

  return {
    control,
    handleSubmit,
    reset,
    errors,
    onExamSubmit,
    handleChange,
  };
}
