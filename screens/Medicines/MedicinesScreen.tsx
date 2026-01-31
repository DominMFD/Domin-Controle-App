import Header from "@/components/Header/Header";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { Animated, View } from "react-native";
import AddMedicineButton from "./components/AddMedicineButton/AddMedicineButton";
import MedicinesList from "./components/MedicinesList/MedicinesList";
import AddMedicineModal from "./components/AddMedicineModal/AddMedicineModal";
import { useMedicineModalStore } from "./useMedicineModalStore";
import { useMedicineQuery } from "./useMedicineQuery";
import { OxygenationIcon } from "@/assets/images/icons/OxygenationIcon";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import { MedicinesIcon } from "@/assets/images/icons/MedicinesIcon";

export default function MedicinesScreen() {
  const { modalOpen, toggleModal } = useMedicineModalStore();
  const { listMedicineQuery } = useMedicineQuery();

  return (
    <>
      <Header title="Remédios">
        <View className="flex flex-row w-full gap-[8px] items-center">
          <SearchInput placeholder="Pesquisar Remédio" />
          <AddMedicineButton onPress={toggleModal} />
        </View>
      </Header>
      {listMedicineQuery.isLoading ? (
        <View className="items-center justify-center flex-1">
          <Animated.View>
            <MedicinesIcon width={210} height={210} color="#B22222" />
          </Animated.View>
        </View>
      ) : (
        <MedicinesList medicines={listMedicineQuery.data?.data} />
      )}

      <AddMedicineModal />
    </>
  );
}
