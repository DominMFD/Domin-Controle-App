import ContentTemplate from "@/components/ContentTemplate/ContentTemplate";
import MedicineItem from "../MedicineItem/MedicineItem";
import { MedicineListProps } from "./MedicineList.types";

export default function MedicinesList({ medicines }: MedicineListProps) {
  return (
    <ContentTemplate>
      {medicines?.map(medicine => (
        <MedicineItem key={medicine.id} medicine={medicine} />
      ))}
    </ContentTemplate>
  );
}
