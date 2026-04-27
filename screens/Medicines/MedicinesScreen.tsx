import Header from "@/components/Header/Header";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { Animated, View } from "react-native";
import { useState } from "react";
import AddMedicineButton from "./components/AddMedicineButton/AddMedicineButton";
import MedicinesList from "./components/MedicinesList/MedicinesList";
import AddMedicineModal from "./components/AddMedicineModal/AddMedicineModal";
import { useMedicineModalStore } from "./useMedicineModalStore";
import { useMedicineQuery } from "./useMedicineQuery";
import { MedicinesIcon } from "@/assets/images/icons/MedicinesIcon";
import { DeleteModal } from "@/components/DeleteModal/DeleteModal";
import { useMedicineMutation } from "./useMedicineMutation";
import { Medicine } from "@/services/models/Medicine";

export default function MedicinesScreen() {
  const {
    modalOpen,
    toggleModal,
    deleteModal,
    toggleDeleteModal,
    selectedMedicine,
    setSelectedMedicine,
  } = useMedicineModalStore();
  const { listMedicineQuery } = useMedicineQuery();
  const { deleteMedicineMutation } = useMedicineMutation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = (medicine: Medicine) => {
    setSelectedMedicine(medicine);
    toggleModal();
  };

  const filteredMedicines = (listMedicineQuery.data ?? []).filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Header title="Remédios">
        <View className="flex flex-row w-full gap-[8px] items-center">
          <SearchInput
            placeholder="Pesquisar Remédio"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
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
        <MedicinesList medicines={filteredMedicines} onEdit={handleEdit} />
      )}

      <AddMedicineModal />

      <DeleteModal
        label="Remédios"
        title={`Deseja excluir o remédio "${selectedMedicine?.name}"?`}
        modalOpen={deleteModal}
        toggleModal={toggleDeleteModal}
        deleteFn={() =>
          selectedMedicine && deleteMedicineMutation.mutate(selectedMedicine.id)
        }
      />
    </>
  );
}
