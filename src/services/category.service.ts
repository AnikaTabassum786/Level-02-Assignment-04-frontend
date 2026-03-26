import { cookies } from "next/headers";
import { env } from "../../env";

const API_URL = env.API_URL

export const categoryService = {


getCategories: async () => {
    try {
  
      const cookieStore = await cookies(); 
      const cookieHeader = cookieStore
        .getAll()
        .map((c) => `${c.name}=${c.value}`)
        .join("; ");
  
      const res = await fetch(`${API_URL}/api/categories`, {
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
};

