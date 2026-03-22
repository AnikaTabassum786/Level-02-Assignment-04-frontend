import { categoryService } from "@/services/category.service";
import AllCategoriesClient from "./AllCategoriesClient";

export default async function AllCategoriesServer() {

const res = await categoryService.getCategories();
  
const categories = res.data;
console.log(categories)

return <AllCategoriesClient categories={categories} />;
}