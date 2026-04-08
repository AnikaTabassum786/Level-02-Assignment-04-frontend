



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
import { Button } from "@/components/ui/button";
import { updateOrder } from "@/action/order.action";

type Order = {
  id: string;
  status: "PLACED" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  customer?: {
    email: string;
  };
};

interface AllOrderClientProps {
  initialData: Order[];
}

export default function AllOrdersClient({ initialData }: AllOrderClientProps) {
  const [orders, setOrders] = useState<Order[]>(initialData);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const router = useRouter();

  const handleStatusChange = (id: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus as any } : order
      )
    );
  };

  const handleUpdate = async (id: string, status: string) => {
    setLoadingId(id);

    const res = await updateOrder(id, { status });

    if (res?.success) {
      router.refresh();
      console.log("Updated Order")
    } else {
      alert(res?.message || "Update failed");
    }

    setLoadingId(null);
  };

  return (
    <>
    
      <p className="flex justify-center sm:p-4 md:p-4 lg:p-6 text-lg md:text-xl lg:text-3xl">Incoming Orders</p>
      <div className="pb-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order Code</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
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
                <TableCell>{order?.customer?.email}</TableCell>
                <TableCell>{order.status}</TableCell>

                <TableCell>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option value="PLACED">Placed</option>
                    <option value="PROCESSING">Processing</option>
                    <option value="SHIPPED">Shipped</option>
                    <option value="DELIVERED">Delivered</option>
                    <option value="CANCELLED">Cancelled</option>
                  </select>

                  <Button
                    onClick={() => handleUpdate(order.id, order.status)}
                    disabled={loadingId === order.id}
                  >
                    {loadingId === order.id ? "Updating..." : "Update Status"}
                  </Button>
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