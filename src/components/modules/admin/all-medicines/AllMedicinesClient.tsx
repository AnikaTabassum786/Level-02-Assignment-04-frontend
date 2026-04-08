// "use client";

// type Medicine = {
//   id: string;
//   name: string;
//   stock: string;
//   price:string;
//   manufacturer:string;
  
// };

// export default function AllMedicinesClient({ medicines }: { medicines: Medicine[] }) {

//   return (
//     <div>
//       <h1>All Users</h1>

//       {medicines.map((medicine: Medicine) => (
//         <div key={medicine.id}>
//           <p>{medicine.name}</p>
//           <p>{medicine.price}</p>
//           <p>{medicine.stock}</p>
//           <p>{medicine.manufacturer}</p>
//         </div>
//       ))}
//     </div>
//   );
// }



"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Medicine = {
  id: string;
  name: string;
  stock: string;
  price: string;
  manufacturer: string;
};

export default function AllMedicinesClient({
  medicines,
}: {
  medicines: Medicine[];
}) {
  return (
    <div className="p-4 md:p-6">
      <div className="">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Manufacturer</TableHead>
                <TableHead className="text-center">Stock</TableHead>
                <TableHead className="text-center">Price</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {medicines.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                    No medicines found
                  </TableCell>
                </TableRow>
              ) : (
                medicines.map((medicine: Medicine) => (
                  <TableRow
                    key={medicine.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <TableCell className="text-center font-medium">
                      {medicine.name}
                    </TableCell>

                    <TableCell className="text-center text-gray-600">
                      {medicine.manufacturer}
                    </TableCell>

                    <TableCell className="text-center">
                      {medicine.stock}
                    </TableCell>

                    <TableCell className="text-center font-semibold">
                      ৳ {medicine.price}
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