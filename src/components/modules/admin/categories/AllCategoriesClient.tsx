// "use client";

// import { deleteCategory } from "@/action/category.action";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { toast } from "sonner";

// type Category = {
//   id: string;
//   name: string;
// };

// export default function AllCategoriesClient({
//   categories,
// }: {
//   categories: Category[];
// }) {
//   const [categoryList, setCategoryList] = useState(categories);

//   const handleDelete = async (id: string) => {

//         const res = await deleteCategory(id);
    
//         if (res.success) {
          
//          setCategoryList((prev) => prev.filter((cat) => cat.id !== id));
//          toast.success("Category Deleted Successfully")
//         } else {
//           // toast.error(res.message);
//         }
//       };

//   return (
//     <div>
//       <h1>All Categories</h1>

//       {categoryList.map((category) => (
//         <div key={category.id} style={{ marginBottom: "10px" }}>
//           <p>{category.name}</p>

//           <Button
//           className="cursor-pointer bg-red-400 text-white hover:text-white hover:bg-red-500"
//             onClick={() => handleDelete(category.id)}
//             // style={{
//             //   background: "red",
//             //   color: "white",
//             //   padding: "5px 10px",
//             //   cursor: "pointer",
//             // }}
//           >
//             Delete
//           </Button>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";

import { deleteCategory } from "@/action/category.action";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
      toast.success("Category Deleted Successfully");
    } else {
      // toast.error(res.message);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="text-center">Category Name</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {categoryList.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={2} className="text-center py-6 text-gray-500">
                    No categories found
                  </TableCell>
                </TableRow>
              ) : (
                categoryList.map((category) => (
                  <TableRow
                    key={category.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <TableCell className="text-center font-medium">
                      {category.name}
                    </TableCell>

                    <TableCell className="text-center">
                      <Button
                        size="sm"
                        className="bg-red-400 hover:bg-red-500 text-white cursor-pointer"
                        onClick={() => handleDelete(category.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}