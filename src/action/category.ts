'use server'

import { CategoryData, categoryService } from "@/services/category.service"

export const createCategory = async(data:CategoryData)=>{
    const res = await categoryService.createCategory(data)
    // updateTag("")
    return res
}

export const deleteCategory = async (id: string) => {
  const res = await categoryService.deleteCategoryById(id);
  return res;
};