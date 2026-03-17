
import { cookies } from "next/headers";
import { env } from "../../env";

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
  sellerId: string;
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
           
                 const res = await fetch(`${API_URL}/posts`,{
                   method:"POST",
                   headers:{
                     "Content-Type":"application/json",
                     Cookie:cookieStore.toString()
                   },
                   body:JSON.stringify(medicineData)
                 })

                 const data = await res.json();

                 if(data.error){
                    return {
                        data:null,
                        error:{message:"Error: Post not created"}
                    }
                 }
                 return {data:data,error:null}
        }
        catch(err){
          return{data:null,error:{message:"Something Went Wrong"}}
        }
  }

};

