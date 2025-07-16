import { ButtonProps, TouchableOpacityProps } from "react-native";

export type MainButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "default" | "black" | "blue";
};
