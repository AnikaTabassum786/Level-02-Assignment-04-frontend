import { cookies } from "next/headers";
import { env } from "../../env";

const API_URL = env.API_URL

export const allOrderService = {
  getOwnOrders: async () => {
  try {

    const cookieStore = await cookies(); 
    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${API_URL}/api/orders`, {
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
  }

  //  getOrderById: async (id: string) => {
  //   try {
  //      // try {

  //   const cookieStore = await cookies(); 
  //   const cookieHeader = cookieStore
  //     .getAll()
  //     .map((c) => `${c.name}=${c.value}`)
  //     .join("; ");

  //   const res = await fetch(`${API_URL}/api/orders/${id}`, {
  //     headers: {
  //       Cookie: cookieHeader,
  //     },
  //     credentials: "include",
  //     cache: "no-store",
  //   });

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch Items");
  //   }

  //   return await res.json();
  //   } 
    
  //   catch (error) {
  //     console.error("Single medicine fetch error:", error);
  //     return null;
  //   }
  // },

  
};


  