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

  createOrder: async (orderData: orderData) => {
    try {
      const cookieStore = await cookies()
      console.log(cookieStore)

      const res = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString()
        },
        credentials: "include",
        body: JSON.stringify(orderData)
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


  //ADMIN & Customer
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
  },

//  getOrderById: async (id: string) => {
//     try {
//       const res = await fetch(`${API_URL}/api/orders/${id}`, {
//         cache: "no-store",
//       });

//       console.log(res)

//       if (!res.ok) {
//         throw new Error("Failed to fetch orders");
//       }

//       return await res.json();
//     } catch (error) {
//       console.error("Single order fetch error:", error);
//       return null;
//     }
//  }

getOrderById: async (id: string) => {
  try {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${API_URL}/api/orders/${id}`, {
      headers: {
        Cookie: cookieHeader,
      },
      credentials: "include",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data)

    if (!res.ok) {
      throw new Error(data?.message || "Failed to fetch order");
    }

    return data;
  } catch (error) {
    console.error("Single order fetch error:", error);
    return null;
  }
},


 //Seller
  getOrders: async () => {
    try {

      const cookieStore = await cookies();
      const cookieHeader = cookieStore
        .getAll()
        .map((c) => `${c.name}=${c.value}`)
        .join("; ");

      const res = await fetch(`${API_URL}/api/seller/orders`, {
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

  
 //Seller

    updateOrderStatus: async (orderId: string, updateData: any) => {
    try {
      const cookieStore = await cookies();
  
      const res = await fetch(`${API_URL}/api/seller/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        credentials: "include",
        body: JSON.stringify(updateData),
      });
  
      const responseData = await res.json();
  
      if (!res.ok) {
        return { success: false, message: responseData?.message };
      }
  
      return { success: true, message: responseData?.message };
    } catch (err: any) {
      console.error(err);
      return { success: false, message: "Update failed" };
    }
  }

};