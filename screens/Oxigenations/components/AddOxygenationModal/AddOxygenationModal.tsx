import { CalendarIcon } from "@/assets/images/icons/CalendarIcon";
import AddModalTemplate from "@/components/AddModalTemplate/AddModalTemplate";
import MainButton from "@/components/MainButton/MainButton";
import MainInput from "@/components/MainInput/MainInput";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Easing } from "react-native";
import { Controller, Form } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";
import { PapperIcon } from "@/assets/images/icons/PapperIcon";
import { useOxigenationModalStore } from "../../useOxygenationModalStore";
import { useAddOxygenationModal } from "./useAddOxygenationModal";
import { OxygenationIcon } from "@/assets/images/icons/OxygenationIcon";
import { ClockIcon } from "@/assets/images/icons/ClockIcon";

export default function AddOxygenationModal() {
  const { modalOpen, toggleModal } = useOxigenationModalStore();
  const {
    control,
    errors,
    handleSubmit,
    onOxygenationSubmit,
    handleChange,
    addOxygenationMutation,
    opacity,
  } = useAddOxygenationModal();

  return (
    <AddModalTemplate
      modalOpen={modalOpen}
      toggleModal={toggleModal}
      title="Adicionar Oxigenação"
    >
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
            name="value"
            render={({ field }) => (
              <View className="flex-1 max-w-[35%]">
                <Text className="text-main_black font-medium text-lg">
                  Oxygenação
                </Text>
                <MainInput
                  placeholder="Oxygenação"
                  keyboardType="numeric"
                  errorMessage={errors.value?.message}
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
            name="time"
            render={({ field }) => (
              <View className="flex-1 max-w-[66%]">
                <Text className="text-main_black font-medium text-lg">
                  Hora
                </Text>
                <View>
                  <MainInput
                    placeholder="Hora"
                    errorMessage={errors.time?.message?.toString()}
                    {...field}
                    onChangeText={field.onChange}
                  >
                    <ClockIcon width={22} height={22} />
                  </MainInput>
                </View>
              </View>
            )}
          />

          <View className="flex-1 max-w-[35%]">
            <MainButton
              title="Adicionar"
              variant="default"
              onPress={handleSubmit(onOxygenationSubmit)}
            />
          </View>
        </View>
        <View className="p-[10.5] justify-center w-full items-center opacity-60">
          <View className="w-[42px] h-[42px]">
            {addOxygenationMutation.isPending && (
              <Animated.View style={{ opacity }}>
                <OxygenationIcon width={42} height={42} color="#B22222" />
              </Animated.View>
            )}
          </View>
        </View>
      </View>
    </AddModalTemplate>
  );
}
