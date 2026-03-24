import { cookies } from "next/headers";
import { env } from "../../env";
import { error } from "console";

const API_URL = env.API_URL

export interface orderData {
  shippingAddress: string;
  items: {
    medicineId: string;
    quantity: number;
  }[];
}

export const orderService = {

     createOrder:async(orderData:orderData)=>{
          try{
                const cookieStore = await cookies()
                console.log(cookieStore)
               
                     const res = await fetch(`${API_URL}/api/orders`,{
                       method:"POST",
                       headers:{
                         "Content-Type":"application/json",
                         Cookie:cookieStore.toString()
                       },
                       credentials:"include",
                       body:JSON.stringify(orderData)
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
      },


  getOwnOrders: async () => {
    try {
      const res = await fetch(`${API_URL}/api/orders`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch order");
      }

      return await res.json();
    } catch (error) {
      console.error("Order fetch error:", error);
      return [];
    }
  },
};