import { cookies } from "next/headers";
import { env } from "../../env";

const AUTH_URL = env.AUTH_URL
const API_URL = env.API_URL

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();

      // Convert cookies to header string
      

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();
      console.log("Session:",session)
      if (!session) {
        return { data: null, error: { message: "Session is missing" } };
      }

      return { data: session, error: null };
    } catch (error) {
      return { data: null, error: { message: "Failed to fetch session" } };
    }
  },

   getAllUsers: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/api/admin/users`, {
        method: "GET",
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      if (!res.ok) {
        return { data: null, error: { message: "Unauthorized or failed" } };
      }

      const users = await res.json();

      return { data: users, error: null };
    } catch (error) {
      return { data: null, error: { message: "Failed to fetch users" } };
    }
  },

   banUserById: async (banUserId: string) => {
    try {
      const cookieStore = await cookies();
  
      const res = await fetch(`${API_URL}/api/admin/users/${banUserId}/status`, {
        method: "PATCH",
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
    } catch (err: any) {
      console.error(err);
      return { success: false, message: "Delete failed" };
    }
    }

};