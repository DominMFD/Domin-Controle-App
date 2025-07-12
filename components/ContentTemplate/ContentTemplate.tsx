import { ScrollView } from "react-native";
import { ContentTemplateProps } from "./ContentTemplate.types";

export default function ContentTemplate({ children }: ContentTemplateProps) {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 16,
        gap: 16,
      }}
    >
      {children}
    </ScrollView>
  );
}
