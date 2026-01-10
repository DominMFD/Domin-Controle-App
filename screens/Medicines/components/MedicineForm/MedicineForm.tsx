import { View, Text } from "react-native";
import { useMedicineForm } from "./useMedicineForm";
import { Controller } from "react-hook-form";
import MainInput from "@/components/MainInput/MainInput";

export default function MedicineForm() {
  const { control, errors, watch } = useMedicineForm();

  return (
    <View>
      <View
        className="flex-row justify-between items-center gap-[24px]
        "
      >
        <View className="w-full flex-row justify-between items-center gap-[24px]">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <View className="flex-1 max-w-[60%]">
                <Text className="text-main_black font-medium text-lg">
                  Nome
                </Text>
                <MainInput
                  errorMessage={errors.name?.message?.toString()}
                  placeholder="Nome"
                  {...field}
                />
              </View>
            )}
          />

          <Controller
            control={control}
            name="dosage"
            render={({ field }) => (
              <View className="flex-1 max-w-[35%]">
                <Text className="text-main_black font-medium text-lg">
                  Dosagem (mg)
                </Text>
                <MainInput
                  errorMessage={errors.name?.message?.toString()}
                  placeholder="Dosagem"
                  {...field}
                />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
