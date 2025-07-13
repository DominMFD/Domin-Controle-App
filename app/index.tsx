import { HomeScreen } from "@/screens/Home/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
