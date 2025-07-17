import { PlusIcon } from "@/assets/images/icons/PlusIcon";
import { TouchableOpacity } from "react-native";
import { AddButtonProps } from "./AddButton.types";

export default function AddButton({ ...props }: AddButtonProps) {
  return (
    <TouchableOpacity
      className="absolute w-[50px] h-[50px] bg-main_white rounded-[10px] border border-border_color justify-center items-center bottom-[30px] right-[30px]"
      activeOpacity={0.7}
      style={{
        elevation: 5,
      }}
      {...props}
    >
      <PlusIcon width={20} height={20} color="#B22222" />
    </TouchableOpacity>
  );
}
