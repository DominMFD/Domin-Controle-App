import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useMedicineForm } from "./useMedicineForm";
import { Controller } from "react-hook-form";
import MainInput from "@/components/MainInput/MainInput";
import * as ImagePicker from "expo-image-picker";
import UploadIcon from "@/assets/images/icons/UploadIcon";
import { useState } from "react";
import { Image } from "expo-image";

export default function MedicineForm() {
  const { control, errors, watch } = useMedicineForm();
  const [imageUrl, setImage] = useState<string | null>(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
      selectionLimit: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <View
        className="flex-row justify-between items-center gap-[24px]
        "
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <View className="flex-1 max-w-[60%]">
              <Text className="text-main_black font-medium text-lg">Nome</Text>
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
                Dosagem(mg)
              </Text>
              <MainInput
                errorMessage={errors.dosage?.message?.toString()}
                placeholder="Dosagem"
                {...field}
              />
            </View>
          )}
        />
      </View>
      <View className="w-full flex-row gap-[24px]">
        <View>
          <Text className="text-main_black font-medium text-lg">Imagem</Text>
          <TouchableOpacity
            className="bg-main_white rounded-[10px] text-center flex justify-center items-center h-[88px] w-[84px]"
            onPress={pickImageAsync}
          >
            {imageUrl ? (
              <Image
                source={{ uri: imageUrl }}
                style={{ width: 84, height: 88, borderRadius: 10 }}
                contentFit="cover"
              />
            ) : (
              <UploadIcon color={"#1A1A1A"} width={40} height={40} />
            )}
          </TouchableOpacity>
          <Text className="text-[#DC3545] text-sm h-[14px]">
            {errors.image?.message?.toString()}
          </Text>
        </View>

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <View className="flex-1">
              <Text className="text-main_black font-medium text-lg">
                Prescrição
              </Text>
              <TextInput
                placeholder="Prescrição"
                multiline
                textAlignVertical="top"
                className="bg-main_white rounded-[10px] h-[88px] px-[10px]"
                numberOfLines={4}
                {...field}
              />
              <Text className="text-[#DC3545] text-sm h-[14px]">
                {errors.description?.message?.toString()}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
