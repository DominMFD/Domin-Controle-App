import { TouchableOpacity, Text } from "react-native";
import { MainButtonProps } from "./MainButtonProps";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-[10px] w-full p-[12px] justify-center items-center",
  variants: {
    variant: {
      default: "bg-main_red",
      black: "bg-main_black",
      blue: "bg-primary_background",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

export default function MainButton({
  title,
  variant,
  ...props
}: MainButtonProps) {
  return (
    <TouchableOpacity className={buttonVariants({ variant })} {...props}>
      <Text className="text-lg font-bold text-main_white  ">{title}</Text>
    </TouchableOpacity>
  );
}
