import { CalendarIcon } from "@/assets/images/icons/CalendarIcon";
import AddModalTemplate from "@/components/AddModalTemplate/AddModalTemplate";
import MainButton from "@/components/MainButton/MainButton";
import MainInput from "@/components/MainInput/MainInput";
import { useState } from "react";
import { View, Text } from "react-native";

export default function AddExamModal() {
  const [date, setDate] = useState("");
  const handleChange = (text: string) => {
    let cleaned = text.replace(/\D/g, "");

    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);

    let formatted = cleaned;
    if (cleaned.length > 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    } else if (cleaned.length > 2) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    setDate(formatted);
  };

  return (
    <AddModalTemplate>
      <View className="bg-primary_background px-5 py-4 rounded-t-[20px]">
        <View
          className="flex-row justify-between items-center gap-[24px]
        "
        >
          <View className="flex-1 max-w-[60%]">
            <Text className="text-main_black font-medium text-lg">Data</Text>
            <View>
              <MainInput
                placeholder="Data"
                keyboardType="numeric"
                maxLength={10}
                value={date}
                onChangeText={handleChange}
              >
                <CalendarIcon width={22} height={22} />
              </MainInput>
            </View>
          </View>

          <View className="flex-1 max-w-[35%]">
            <Text className="text-main_black font-medium text-lg">
              Hematócrito
            </Text>
            <MainInput placeholder="Hematócrito" />
          </View>
        </View>

        <View className="flex-row justify-between items-center gap-[24px]">
          <View className="flex-1 max-w-[30%]">
            <Text className="text-main_black font-medium text-lg">Marevan</Text>
            <MainInput placeholder="Marevan" />
          </View>

          <View className="flex-1 max-w-[22%]">
            <Text className="text-main_black font-medium text-lg">RNI</Text>
            <MainInput placeholder="RNI" />
          </View>

          <View className="flex-1 max-w-[35%]">
            <MainButton title="Adicionar" variant="default" />
          </View>
        </View>
      </View>
    </AddModalTemplate>
  );
}
