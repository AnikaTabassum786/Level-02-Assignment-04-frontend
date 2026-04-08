'use client'

import { deleteMedicine } from "@/action/medicine.action";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";



interface Medicine {
  id: string;
  name: string;
  manufacturer: string;
  stock: number;
  price: number;
}

interface AllMedicineClientProps {
  initialData: Medicine[];
}

export default function AllMedicineClient({ initialData }: AllMedicineClientProps) {
  const [medicines, setMedicines] = useState(initialData);
  const router = useRouter();

  const handleEdit = (id: string) => {
  router.push(`/seller-dashboard/all-medicine/${id}`);
};

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    const res = await deleteMedicine(id);

    if (res.success) {
      alert("Deleted successfully");
      setMedicines(medicines.filter((m) => m.id !== id));
    } else {
      alert(res.message);
    }
  };

  return (
    <>
   
     <p className="flex justify-center sm:p-4 md:p-4 lg:p-6 text-lg md:text-xl lg:text-3xl">All Medicine</p>
       
        <div className="pb-4">
          <Table>
        <TableHeader>
          <TableRow>
            <TableHead  className="text-center">Medicine Name</TableHead>
            <TableHead  className="text-center">Manufacturer</TableHead>
            <TableHead  className="text-center">Stock</TableHead>
            <TableHead  className="text-center">Price</TableHead>
            <TableHead className="text-start pl-10">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicines.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No medicines found
              </TableCell>
            </TableRow>
          ) : (
            medicines.map((medicine) => (
              <TableRow key={medicine.id}>
                <TableCell  className="text-center">{medicine.name}</TableCell>
                <TableCell  className="text-center">{medicine.manufacturer}</TableCell>
                <TableCell  className="text-center">{medicine.stock}</TableCell>
                <TableCell  className="text-center">{medicine.price}</TableCell>
                <TableCell className="flex gap-2 text-center">
                  <Button onClick={() => handleEdit(medicine.id)}>Edit</Button>
                  <Button onClick={() => handleDelete(medicine.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
         
      </Table>
        </div>
    </>
  );
}
