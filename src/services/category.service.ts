import { env } from "../../env";

const API_URL = env.API_URL

export const categoryService = {
  getCategories: async () => {
    try {
      const res = await fetch(`${API_URL}/api/categories`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch categories");
      }

      return await res.json();
    } catch (error) {
      console.error("Medicine fetch error:", error);
      return [];
    }
  },
};