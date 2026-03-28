"use client";

import { deleteCategory } from "@/action/category";
import { useState } from "react";
import { toast } from "sonner";

type Category = {
  id: string;
  name: string;
};

export default function AllCategoriesClient({
  categories,
}: {
  categories: Category[];
}) {
  const [categoryList, setCategoryList] = useState(categories);

  const handleDelete = async (id: string) => {

        const res = await deleteCategory(id);
    
        if (res.success) {
          
         setCategoryList((prev) => prev.filter((cat) => cat.id !== id));
         toast.success("Category Deleted Successfully")
        } else {
          toast.error(res.message);
        }
      };

  return (
    <div>
      <h1>All Categories</h1>

      {categoryList.map((category) => (
        <div key={category.id} style={{ marginBottom: "10px" }}>
          <p>{category.name}</p>

          <button
            onClick={() => handleDelete(category.id)}
            style={{
              background: "red",
              color: "white",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}