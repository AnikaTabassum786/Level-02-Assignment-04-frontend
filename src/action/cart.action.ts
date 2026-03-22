// "use server"

// import { CartData, cartService } from "@/services/cartService"


// export const createCart = async(data:CartData)=>{
//     const res = await cartService.createCart(data)
//     return res
// }

"use server";

import { CartData, cartService } from "@/services/cartService";

export const createCart = async (data: CartData) => {
  const res = await cartService.createCart(data);
  return res;
};