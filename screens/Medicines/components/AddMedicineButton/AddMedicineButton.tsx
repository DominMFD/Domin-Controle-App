import { PlusIcon } from "@/assets/images/icons/PlusIcon";
import { TouchableOpacity } from "react-native";
import { AddMedicineButtonProps } from "./AddMedicineButton.types";

export default function AddMedicineButton({
  ...props
}: AddMedicineButtonProps) {
  return (
    <TouchableOpacity
      className="w-[50px] h-[50px] bg-main_white rounded-[10px] border border-border_color justify-center items-center"
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
