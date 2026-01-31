import { View, Text } from "react-native";
import { Image } from "expo-image";
import { MedicineItemProps } from "./MedicineItem.types";

export default function MedicineItem({ medicine }: MedicineItemProps) {
  console.log(medicine);

  return (
    <View
      className="bg-main_white flex flex-row gap-1 h-[104px]"
      style={{ elevation: 3 }}
    >
      <View className="w-[104px] bg-[#D9D9D9]">
        <Image
          className="w-[34px] h-full"
          source={medicine.image}
          contentFit="cover"
        />
      </View>
      <View className="flex-1 p-[6px] text-main_black">
        <View>
          <Text className="text-center font-semibold text-lg">
            {medicine.name}
          </Text>
          <Text className="text-center -mt-2 text-sm">{medicine.dosage}mg</Text>
        </View>
        <Text className="text-center">{medicine.description}</Text>
      </View>
    </View>
  );
}
