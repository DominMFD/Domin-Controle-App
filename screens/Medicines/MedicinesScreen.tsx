import { SearchIcon } from "@/assets/images/icons/SearchIcon";
import Header from "@/components/Header/Header";
import MainInput from "@/components/MainInput/MainInput";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { TextInput, View } from "react-native";

export default function MedicinesScreen() {
  return (
    <>
      <Header title="Remédios">
        <View>
          <SearchInput />
        </View>
      </Header>
    </>
  );
}
