import AddMedicineFormClient from "@/components/modules/seller/add-medicine/AddMedicineFormClient";
import AddMedicineFormServer from "@/components/modules/seller/add-medicine/AddMedicineFormServer";

export default function AddMedicinePage(){
  return(
    <>
       Add Medicine Page
         {/* <AddMedicineFormServer></AddMedicineFormServer> */}
         <AddMedicineFormClient></AddMedicineFormClient>
 </>
  )
}