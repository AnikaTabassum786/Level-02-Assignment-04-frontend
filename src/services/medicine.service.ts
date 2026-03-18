
import { cookies } from "next/headers";
import { env } from "../../env";
import { error } from "console";


// const AUTH_URL = env.AUTH_URL
const API_URL = env.API_URL

export interface MedicineData {
  name: string;
  description: string;
  price: number;       
  stock: number;
  manufacturer: string;
  imageURL?: string;
  categoryId: string;
  sellerId?: string;
}

export const medicineService = {
  getMedicines: async () => {
    try {
      const res = await fetch("http://localhost:5000/api/medicines", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch medicines");
      }

      return await res.json();
    } catch (error) {
      console.error("Medicine fetch error:", error);
      return [];
    }
  },
   
  getMedicineById: async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/api/medicines/${id}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch medicine");
      }

      return await res.json();
    } catch (error) {
      console.error("Single medicine fetch error:", error);
      return null;
    }
  },

  createMedicine:async(medicineData:MedicineData)=>{
      try{
            const cookieStore = await cookies()
            console.log(cookieStore)
           
                 const res = await fetch(`${API_URL}/api/seller/medicines`,{
                   method:"POST",
                   headers:{
                     "Content-Type":"application/json",
                     Cookie:cookieStore.toString()
                   },
                   credentials:"include",
                   body:JSON.stringify(medicineData)
                 })

                 const data = await res.json();
                 if(!res.ok){
                    return {data:null,error}
                 }
                 return {data:data,error:null}


                 
        }
        catch(err){
          console.log(error)
          return{data:null,error:{message:"Something Went Wrong"}}
        }
  }
};

