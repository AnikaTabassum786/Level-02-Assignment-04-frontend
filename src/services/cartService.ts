import { cookies } from "next/headers";
import { env } from "../../env";
import { error } from "console";

const API_URL = env.API_URL

export interface CartData {
 "medicineId":string,
 "quantity":number
}


export const cartService = {
   createCart:async(cartData:CartData)=>{
      try{
            const cookieStore = await cookies()
            console.log(cookieStore)
           
                 const res = await fetch(`${API_URL}/api/cart`,{
                   method:"POST",
                   headers:{
                     "Content-Type":"application/json",
                     Cookie:cookieStore.toString()
                   },
                   credentials:"include",
                   body:JSON.stringify(cartData)
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



// import { cookies } from "next/headers";
// import { env } from "../../env";

// const API_URL = env.API_URL;

// export interface CartData {
//   medicineId: string;
//   quantity: number;
// }

// export const cartService = {
//   createCart: async (cartData: CartData) => {
//     try {
//       const cookieStore = await cookies();

//       const cookieHeader = cookieStore
//         .getAll()
//         .map((c) => `${c.name}=${c.value}`)
//         .join("; ");

//       const res = await fetch(`${API_URL}/api/cart`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookieHeader,
//         },
//         body: JSON.stringify(cartData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         return { data: null, error: data };
//       }

//       return { data, error: null };
//     } catch (err: any) {
//       console.error(err);
//       return {
//         data: null,
//         error: { message: err.message || "Something went wrong" },
//       };
//     }
//   },
// };