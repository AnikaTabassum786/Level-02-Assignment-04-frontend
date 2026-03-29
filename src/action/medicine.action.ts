"use server"

import { MedicineData, medicineService } from "@/services/medicine.service"
import { updateTag } from "next/cache"

export const createMedicine = async(data:MedicineData)=>{
    const res = await medicineService.createMedicine(data)
    // updateTag("")
    return res
}

export const deleteMedicine = async (id: string) => {
  const res = await medicineService.deleteMedicineById(id);
  return res;
};

export const updateMedicine = async (id: string, updateData: any) => {
  const res = await medicineService.updateMedicine(id, updateData);
  return res
};