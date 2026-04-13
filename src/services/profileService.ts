import { cookies } from "next/headers";
import { env } from "../../env";


const API_URL = env.BACKEND_URL

export const profileService = {

   getOwnInfo: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/api/profile`, {
        method: "GET",
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      if (!res.ok) {
        return { data: null, error: { message: "Failed" } };
      }

      const users = await res.json();

      return { data: users, error: null };
    } catch (error) {
      return { data: null, error: { message: "Failed to fetch info" } };
    }
  },

    updateProfile: async (updateData: any) => {
    try {
      const cookieStore = await cookies();
  
      const res = await fetch(`${API_URL}/api/profile`, {
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