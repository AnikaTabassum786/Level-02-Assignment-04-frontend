import { cookies } from "next/headers";
import { env } from "../../env";
import { error } from "console";

const API_URL = env.API_URL

export interface CartData {
  "medicineId": string,
  "quantity": number
}

export const cartService = {
  createCart: async (cartData: CartData) => {
    try {
      const cookieStore = await cookies()
      console.log(cookieStore)

      const res = await fetch(`${API_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString()
        },
        credentials: "include",
        body: JSON.stringify(cartData)
      })

      const data = await res.json();
      if (!res.ok) {
        return { data: null, error }
      }
      return { data: data, error: null }
    }
    catch (err) {
      console.log(error)
      return { data: null, error: { message: "Something Went Wrong" } }
    }
  },

  getAllOwnCartItems: async () => {
  try {

    const cookieStore = await cookies(); 
    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${API_URL}/api/cart`, {
      headers: {
        Cookie: cookieHeader,
      },
      credentials: "include",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Items");
    }

    return await res.json();
  } catch (error) {
    console.error("Items fetch error:", error);
    return [];
  }
  },

  deleteCartById: async (cartItemId: string) => {
    try {
      const cookieStore = await cookies();
  
      const res = await fetch(`${API_URL}/api/cart/item/${cartItemId}`, {
        method: "DELETE",
        headers: {
          Cookie: cookieStore.toString(),
        },
        credentials: "include",
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        return { success: false, message: data?.message };
      }
  
      return { success: true, message: data?.message };
    } 
    
    catch (err: any) {
      console.error(err);
      return { success: false, message: "Delete failed" };
    }
    },


};



