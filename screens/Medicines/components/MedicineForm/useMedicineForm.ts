import { useFormContext } from "react-hook-form";

export function useMedicineForm() {
  const methods = useFormContext();

  if (!methods) {
    throw new Error(
      "MedicineForm must be used within a <FormProvider> / useFormContext().",
    );
  }

  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  return {
    control,
    watch,
    errors,
    setValue,
  };
}
