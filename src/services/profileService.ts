import { cookies } from "next/headers";
import { env } from "../../env";


const API_URL = env.API_URL

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
};