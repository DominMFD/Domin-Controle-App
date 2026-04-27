import ContentTemplate from "@/components/ContentTemplate/ContentTemplate";
import MedicineItem from "../MedicineItem/MedicineItem";
import { MedicineListProps } from "./MedicineList.types";
import { View, Text } from "react-native";

export default function MedicinesList({
  medicines,
  onEdit,
}: MedicineListProps) {
  if (!medicines || medicines.length === 0) {
    return (
      <View className="pt-[32px]">
        <Text className="text-center text-main_white font-bold text-[20px]">
          Não encontramos nenhum remédio...
        </Text>
      </View>
    );
  }

  return (
    <ContentTemplate>
      {medicines.map(medicine => (
        <MedicineItem key={medicine.id} medicine={medicine} onEdit={onEdit} />
      ))}
    </ContentTemplate>
  );
}
