import { CalendarIcon } from "@/assets/images/icons/CalendarIcon";
import AddModalTemplate from "@/components/AddModalTemplate/AddModalTemplate";
import MainButton from "@/components/MainButton/MainButton";
import MainInput from "@/components/MainInput/MainInput";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { useAddExamModal } from "./useAddExamModal";
import { Controller, Form } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";

export default function AddExamModal() {
  const { control, errors, handleSubmit, reset, onExamSubmit } =
    useAddExamModal();
  const [date, setDate] = useState("");
  const handleChange = (text: string) => {
    let cleaned = text.replace(/\D/g, "");
    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);
    if (cleaned.length > 4)
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    if (cleaned.length > 2) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return cleaned;
  };

  return (
    <AddModalTemplate>
      <View className="bg-primary_background px-5 py-4 rounded-t-[20px]">
        <View
          className="flex-row justify-between items-center gap-[24px]
        "
        >
          <Controller
            control={control}
            name="dataString"
            render={({ field }) => (
              <View className="flex-1 max-w-[60%]">
                <Text className="text-main_black font-medium text-lg">
                  Data
                </Text>
                <View>
                  <MainInput
                    placeholder="Data"
                    keyboardType="numeric"
                    errorMessage={errors.dataString?.message}
                    maxLength={10}
                    {...field}
                    value={
                      field.value ? handleChange(field.value as string) : ""
                    }
                    onChangeText={text => {
                      const formatted = handleChange(text);
                      field.onChange(formatted);
                    }}
                  >
                    <CalendarIcon width={22} height={22} />
                  </MainInput>
                </View>
              </View>
            )}
          />

          <Controller
            control={control}
            name="hematocrito"
            render={({ field }) => (
              <View className="flex-1 max-w-[35%]">
                <Text className="text-main_black font-medium text-lg">
                  Hematócrito
                </Text>
                <MainInput
                  placeholder="Hematócrito"
                  keyboardType="numeric"
                  errorMessage={errors.hematocrito?.message}
                  {...field}
                  value={field.value !== undefined ? String(field.value) : ""}
                  onChangeText={text => {
                    const num = text !== "" ? Number(text) : undefined;
                    field.onChange(num);
                  }}
                />
              </View>
            )}
          />
        </View>

        <View className="flex-row justify-between items-center gap-[24px]">
          <Controller
            control={control}
            name="marevan"
            render={({ field }) => (
              <View className="flex-1 max-w-[30%]">
                <Text className="text-main_black font-medium text-lg">
                  Marevan
                </Text>
                <MainInput
                  placeholder="Marevan"
                  errorMessage={errors.marevan?.message}
                  {...field}
                  onChangeText={field.onChange}
                />
              </View>
            )}
          />

          <Controller
            control={control}
            name="rni"
            render={({ field }) => (
              <View className="flex-1 max-w-[22%]">
                <Text className="text-main_black font-medium text-lg">RNI</Text>
                <CurrencyInput
                  value={field.value ?? null}
                  onChangeValue={field.onChange}
                  prefix="" // sem símbolo
                  delimiter="." // separador de milhar (não usado aqui)
                  separator="." // separador decimal
                  keyboardType="decimal-pad"
                />
              </View>
            )}
          />

          <View className="flex-1 max-w-[35%]">
            <MainButton
              title="Adicionar"
              variant="default"
              onPress={handleSubmit(onExamSubmit)}
            />
          </View>
        </View>
      </View>
    </AddModalTemplate>
  );
}
