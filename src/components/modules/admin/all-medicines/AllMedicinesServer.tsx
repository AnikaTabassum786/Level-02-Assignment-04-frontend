import { medicineService } from "@/services/medicine.service";
import AllMedicinesClient from "./AllMedicinesClient";

export default async function AllMedicinesServer() {

    const res = await medicineService.getMedicines();
    const medicines = res?.data?.data || [];

  console.log(medicines)

  return <AllMedicinesClient medicines={medicines} />;
}