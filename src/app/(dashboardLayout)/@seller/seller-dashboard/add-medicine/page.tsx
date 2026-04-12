export const dynamic = "force-dynamic";
import AddMedicineFormClient from "@/components/modules/seller/add-medicine/AddMedicineFormClient";
import AddMedicineFormServer from "@/components/modules/seller/add-medicine/AddMedicineFormServer";
import { categoryService } from "@/services/category.service";

export default async function AddMedicinePage(){
  const res = await categoryService.getCategories();
  

  const categories = res.data;
  console.log(categories)

  return(
    <>
       
         {/* <AddMedicineFormServer></AddMedicineFormServer> */}
         <AddMedicineFormClient categories={categories}/>
 </>
  )
}