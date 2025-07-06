import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Text } from "react-native";

export function TabBar({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) {
  return (
    <View
      className="w-full flex flex-row bg-second_background justify-between items-center"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 1,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label = options.title ?? route.name;

        const iconNode = options.tabBarIcon?.({
          focused: isFocused,
          color: isFocused ? "#B22222" : "#F9FAFB",
          size: 24,
        });

        const onPress = () => navigation.navigate(route.name);

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            className={`justify-center items-center flex-1 ${isFocused ? "bg-main_white" : "bg-transparent"} border-r ${index + 1 === state.routes.length ? "border-none " : "border-primary_background"}`}
          >
            {iconNode}
            <Text
              className={`${isFocused ? "text-main_red" : "text-main_white"}`}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
