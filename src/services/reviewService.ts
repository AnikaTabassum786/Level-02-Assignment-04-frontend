
import { cookies } from "next/headers";
import { env } from "../../env";
import { error } from "console";



const API_URL = env.API_URL

export interface ReviewData {
  medicineId: string;
  rating: number;
  comment?: string; 
}

export const reviewService = {


createReview:async(reviewData:ReviewData)=>{
      try{
            const cookieStore = await cookies()
            console.log(cookieStore)
           
                 const res = await fetch(`${API_URL}/api/review`,{
                   method:"POST",
                   headers:{
                     "Content-Type":"application/json",
                     Cookie:cookieStore.toString()
                   },
                   credentials:"include",
                   body:JSON.stringify(reviewData)
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


};

