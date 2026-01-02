import { Fields } from "@/components/FieldOrdering/FieldOrdering.types";
import Header from "@/components/Header/Header";
import { useOxigenationsScreenStore } from "./useOxigenationScreenStore";
import FieldOrdering from "@/components/FieldOrdering/FieldOrdering";
import useOxygenationFieldOrdering from "./useOxygenationFieldOrdering";
import { useOxygenationQuery } from "./useOxygenationQuery";
import { PapperIcon } from "@/assets/images/icons/PapperIcon";
import { View, Animated } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import { useOxygenationsScreen } from "./useOxygenationScreen";
import OxygenationsList from "./components/OxigenationsList/OxygenationsList";

export default function OxigenationsScreen() {
  const oxigenationsFields: Fields[] = ["DATE", "TIME", "VALUE"];
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
            <PapperIcon width={210} height={210} color="#B22222" />
          </Animated.View>
        </View>
      ) : (
        <OxygenationsList oxygenations={listOxygenationQuery.data?.data} />
      )}
    </>
  );
}
