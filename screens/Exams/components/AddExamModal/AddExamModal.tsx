import { CalendarIcon } from "@/assets/images/icons/CalendarIcon";
import AddModalTemplate from "@/components/AddModalTemplate/AddModalTemplate";
import MainButton from "@/components/MainButton/MainButton";
import MainInput from "@/components/MainInput/MainInput";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { useAddExamModal } from "./useAddExamModal";
import { Controller, Form } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";
import { PapperIcon } from "@/assets/images/icons/PapperIcon";
import { useExamModalStore } from "../../useExamModalStore";

export default function AddExamModal() {
  const { modalOpen, toggleModal } = useExamModalStore();
  const {
    control,
    errors,
    handleSubmit,
    onExamSubmit,
    handleChange,
    addExamMutation,
  } = useAddExamModal();

  return (
    <AddModalTemplate modalOpen={modalOpen} toggleModal={toggleModal}>
      <View className="bg-primary_background px-5 py-4 rounded-t-[20px] gap-[6px]">
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
              <View className="flex-1 max-w-[33%]">
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
              <View className="flex-1 max-w-[18%]">
                <Text className="text-main_black font-medium text-lg">RNI</Text>
                <View>
                  <CurrencyInput
                    className="bg-main_white rounded-[10px] placeholder:text-[#1B1B1B]/42 font-boldaaa text-main_black flex-row items-center justify-between px-[10px]"
                    value={typeof field.value === "number" ? field.value : null}
                    onChangeValue={val => field.onChange(val ?? undefined)}
                    prefix=""
                    keyboardType="decimal-pad"
                    placeholder="RNI"
                  />
                  <Text className="text-[#DC3545] text-sm">
                    {errors.rni?.message}
                  </Text>
                </View>
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
        <View className="p-[10.5] justify-center w-full items-center opacity-60">
          <View className="w-[42px] h-[42px]">
            <PapperIcon width={42} height={42} color="#B22222" />
          </View>
        </View>
      </View>
    </AddModalTemplate>
  );
}
