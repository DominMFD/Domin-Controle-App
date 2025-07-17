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

  const onExamSubmit = (data: ExamSchemaType) => {
    console.log(data);
  };

  return {
    control,
    handleSubmit,
    reset,
    errors,
    onExamSubmit,
  };
}
