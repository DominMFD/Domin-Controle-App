import ContentTemplate from "@/components/ContentTemplate/ContentTemplate";
import { View, Text } from "react-native";
import { DeleteModal } from "@/components/DeleteModal/DeleteModal";
import { OxygenationsListProps } from "./OxygenationList.types";
import React from "react";
import OxygenationItem from "../OxygenationItem/OxygenationItem";

export default function OxygenationsList({
  oxygenations,
}: OxygenationsListProps) {
  if (!oxygenations || oxygenations.length === 0) {
    return (
      <View className="pt-[32px]">
        <Text className="text-center text-main_white font-bold text-[20px]">
          Não encontramos nenhuma oxigenação...
        </Text>
      </View>
    );
  }
  return (
    <ContentTemplate>
      {oxygenations.map(oxi => (
        <OxygenationItem key={oxi.id} oxi={oxi} />
      ))}
    </ContentTemplate>
  );
}
