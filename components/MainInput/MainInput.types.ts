import { TextInputProps } from "react-native";

export type MainInputProps = TextInputProps & {
  children?: React.ReactNode;
  errorMessage?: string;
};
