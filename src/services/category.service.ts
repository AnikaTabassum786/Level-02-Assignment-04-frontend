
import { cookies } from "next/headers";
import { env } from "../../env";
import { error } from "console";

const API_URL = env.API_URL

export interface CategoryData {
  name: string;
}


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
    },


      createCategory:async(categoryData:CategoryData)=>{
          try{
                const cookieStore = await cookies()
                console.log(cookieStore)
               
                     const res = await fetch(`${API_URL}/api/categories`,{
                       method:"POST",
                       headers:{
                         "Content-Type":"application/json",
                         Cookie:cookieStore.toString()
                       },
                       credentials:"include",
                       body:JSON.stringify(categoryData)
                     })
    
                     const data = await res.json();
                     if(!res.ok){
                        return {data:null,error}
                     }
                     return {data:data,error:null}
                       
            }
            catch(err){
              console.log(error)
              return{data:null,error:{message:"Something Went Wrong"}}
            }
      },

 deleteCategoryById: async (categoryId: string) => {
  try {
    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/api/categories/${categoryId}`, {
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
  } catch (err: any) {
    console.error(err);
    return { success: false, message: "Delete failed" };
  }
  },

};

