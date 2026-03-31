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
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Medicine Name</TableHead>
            <TableHead>Manufacturer</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Action</TableHead>
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
                <TableCell>{medicine.name}</TableCell>
                <TableCell>{medicine.manufacturer}</TableCell>
                <TableCell>{medicine.stock}</TableCell>
                <TableCell>{medicine.price}</TableCell>
                <TableCell className="flex gap-2">
                  <Button onClick={() => handleEdit(medicine.id)}>Edit</Button>
                  <Button onClick={() => handleDelete(medicine.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody> <TableBody>
          {medicines.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No medicines found
              </TableCell>
            </TableRow>
          ) : (
            medicines.map((medicine) => (
              <TableRow key={medicine.id}>
                <TableCell>{medicine.name}</TableCell>
                <TableCell>{medicine.manufacturer}</TableCell>
                <TableCell>{medicine.stock}</TableCell>
                <TableCell>{medicine.price}</TableCell>
                <TableCell className="flex gap-2">
                  <Button onClick={() => handleEdit(medicine.id)}>Edit</Button>
                  <Button onClick={() => handleDelete(medicine.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
