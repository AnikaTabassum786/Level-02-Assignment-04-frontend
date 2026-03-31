'use client';


import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useRouter } from "next/navigation";

type Order = {
  id: string;
  status: "PLACED" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
};

interface AllOrderClientProps {
  initialData: Order[];
}

export default function AllOrdersClient({ initialData }: AllOrderClientProps) {
  const [orders, setOrders] = useState<Order[]>(initialData);
  const router = useRouter();

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order id</TableHead>
            <TableHead>Status</TableHead>
          
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No orders found
              </TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>

                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}