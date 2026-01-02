import { Fields } from "@/components/FieldOrdering/FieldOrdering.types";
import Header from "@/components/Header/Header";
import { useOxigenationsScreenStore } from "./useOxigenationScreenStore";
import FieldOrdering from "@/components/FieldOrdering/FieldOrdering";
import useOxygenationFieldOrdering from "./useOxygenationFieldOrdering";
import { useOxygenationQuery } from "./useOxygenationQuery";
import { View, Animated } from "react-native";
import { useOxygenationsScreen } from "./useOxygenationScreen";
import OxygenationsList from "./components/OxigenationsList/OxygenationsList";
import { OxygenationIcon } from "@/assets/images/icons/OxygenationIcon";
import AddButton from "@/components/AddButton/AddButton";
import { useOxigenationModalStore } from "./useOxygenationModalStore";
import AddOxygenationModal from "./components/AddOxygenationModal/AddOxygenationModal";

export default function OxigenationsScreen() {
  const oxigenationsFields: Fields[] = ["DATE", "TIME", "VALUE"];
  const { toggleModal, deleteModal, toggleDeleteModal } =
    useOxigenationModalStore();
  const { opacity } = useOxygenationsScreen();
  const { order, sortBy } = useOxigenationsScreenStore();
  const { handleToggleOrdenation } = useOxygenationFieldOrdering();
  const { listOxygenationQuery } = useOxygenationQuery();

  return (
    <>
      <Header title="Oxigenação">
        <FieldOrdering
          fields={oxigenationsFields}
          order={order}
          sortBy={sortBy}
          onToggleOrdenation={handleToggleOrdenation}
        />
      </Header>
      {listOxygenationQuery.isLoading ? (
        <View className="items-center justify-center flex-1">
          <Animated.View style={{ opacity }}>
            <OxygenationIcon width={210} height={210} color="#B22222" />
          </Animated.View>
        </View>
      ) : (
        <OxygenationsList oxygenations={listOxygenationQuery.data?.data} />
      )}
      <AddButton onPress={toggleModal} />
      <AddOxygenationModal />
    </>
  );
}
