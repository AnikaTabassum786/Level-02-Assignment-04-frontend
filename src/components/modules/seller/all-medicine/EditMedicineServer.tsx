import { medicineService } from "@/services/medicine.service";
import EditMedicineClient from "./EditMedicineClient";


type Props = {
  id: string;
};

export default async function EditMedicineServer({ id }: Props) {
  
  const medicine = await medicineService.getMedicineById(id);

  // Optional: handle not found
  if (!medicine) {
    return <div>Medicine not found!!!</div>;
  }

  return (
    <div>
      
      <EditMedicineClient medicine={medicine} />
    </div>
  );
}