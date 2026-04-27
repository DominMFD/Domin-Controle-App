import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { MedicineItemProps } from "./MedicineItem.types";
import EditPenIcon from "@/assets/images/icons/EditPenIcon";

export default function MedicineItem({ medicine, onEdit }: MedicineItemProps) {
  return (
    <View
      className="bg-main_white flex flex-row gap-1 h-[104px]"
      style={{ elevation: 3 }}
    >
      <TouchableOpacity
        className="absolute top-[6px] right-[6px] z-10 p-1"
        onPress={() => onEdit(medicine)}
        hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
      >
        <EditPenIcon width={18} height={18} color="#1A1A1A" />
      </TouchableOpacity>
      <View className="w-[104px] h-[104px] bg-[#D9D9D9]">
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: medicine.image }}
          contentFit="cover"
          cachePolicy="none"
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
