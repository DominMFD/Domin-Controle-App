import { View, Text } from "react-native";
import { Image } from "expo-image";

export default function MedicineItem() {
  return (
    <View
      className="bg-main_white flex flex-row gap-1 h-[104px]"
      style={{ elevation: 3 }}
    >
      <View className="w-[104px] bg-[#D9D9D9]">
        <Image
          className="w-[34px] h-full"
          source="https://png.pngtree.com/thumb_back/fh260/background/20230804/pngtree-flowers-of-cosmos-beautiful-and-beautiful-purple-flowers-spring-green-field-image_13001920.jpg"
          contentFit="cover"
        />
      </View>
      <View className="flex-1 p-[6px] text-main_black">
        <View>
          <Text className="text-center font-semibold text-lg">Furosemida</Text>
          <Text className="text-center -mt-2 text-sm">25mg</Text>
        </View>
        <Text className="text-center">
          Tomar 1/2 comprimido duas vezes ao dia, apos o almoço
          blablablablablablablablablab
        </Text>
      </View>
    </View>
  );
}
