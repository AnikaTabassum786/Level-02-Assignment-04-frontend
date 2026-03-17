"use server"

import { MedicineData, medicineService } from "@/services/medicine.service"
import { updateTag } from "next/cache"

export const createMedicine = async(data:MedicineData)=>{
    const res = await medicineService.createMedicine(data)
    // updateTag("")
    return res
}