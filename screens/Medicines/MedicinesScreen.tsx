import { SearchIcon } from "@/assets/images/icons/SearchIcon";
import Header from "@/components/Header/Header";
import MainInput from "@/components/MainInput/MainInput";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { TextInput, View } from "react-native";
import AddMedicineButton from "./components/AddMedicineButton/AddMedicineButton";

export default function MedicinesScreen() {
  return (
    <>
      <Header title="Remédios">
        <View className="flex flex-row w-full gap-2 items-center">
          <SearchInput className="flex-1" />
          <AddMedicineButton />
        </View>
      </Header>
    </>
  );
}
