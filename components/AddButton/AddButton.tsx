import { PlusIcon } from "@/assets/images/icons/PlusIcon";
import { Pressable } from "react-native";

export default function AddButton() {
  return (
    <Pressable
      className="absolute w-[50px] h-[50px] bg-main_white rounded-[10px] border border-border_color justify-center items-center bottom-[30px] right-[30px]"
      style={{
        elevation: 5,
      }}
    >
      <PlusIcon width={20} height={20} color="#B22222" />
    </Pressable>
  );
}
