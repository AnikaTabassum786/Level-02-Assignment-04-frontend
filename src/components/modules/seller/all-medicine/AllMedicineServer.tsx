import AllMedicineClient from "./AllMedicineClient";
import { medicineService } from "@/services/medicine.service";

export default async function AllMedicineServer() {
  const res = await medicineService.getMedicines();
  const medicines = res?.data?.data || [];

  return <AllMedicineClient initialData={medicines} />;
}