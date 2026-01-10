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
    formState: { errors },
  } = methods;

  return {
    control,
    watch,
    errors,
  };
}
