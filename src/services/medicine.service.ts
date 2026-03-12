import { cookies } from "next/headers";
import { env } from "../../env";

const AUTH_URL = env.AUTH_URL


export const medicineService = {
  getMedicines: async () => {
    try {
      const res = await fetch("http://localhost:5000/api/medicines", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch medicines");
      }

      return await res.json();
    } catch (error) {
      console.error("Medicine fetch error:", error);
      return [];
    }
  },
};

// export const medicineService = {
//     getMedicines: async function () {
//         try {
//             const cookieStore = await cookies();

//             const res = await fetch(`${AUTH_URL}/api/medicines`, {
//                 headers: {
//                     Cookie: cookieStore.toString(),
//                 },
//                 cache: "no-store",
//             });

//             const data = await res.json();

//             return data;
//         } catch (error) {
//             console.error("Medicine fetch error:", error);
//             return null;
//         }

//     },
// };