import { SafeAreaView, View } from "react-native";

export default function ContentTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View className="bg-primary_background h-full">{children}</View>;
}
