import { SafeAreaView } from "react-native-safe-area-context";

export default function ContentTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView className="bg-primary_background h-full">
      {children}
    </SafeAreaView>
  );
}
