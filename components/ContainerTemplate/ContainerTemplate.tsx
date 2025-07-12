import { SafeAreaView, View } from "react-native";

export default function ContainerTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View className="bg-primary_background h-full relative">{children}</View>
  );
}
