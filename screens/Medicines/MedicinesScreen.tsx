import Header from "@/components/Header/Header";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { View } from "react-native";
import AddMedicineButton from "./components/AddMedicineButton/AddMedicineButton";
import MedicinesList from "./components/MedicinesList/MedicinesList";
import AddMedicineModal from "./components/AddMedicineModal/AddMedicineModal";

export default function MedicinesScreen() {
  return (
    <>
      <Header title="Remédios">
        <View className="flex flex-row w-full gap-[8px] items-center">
          <SearchInput placeholder="Pesquisar Remédio" />
          <AddMedicineButton />
        </View>
      </Header>
      <MedicinesList />
      <AddMedicineModal />
    </>
  );
}
