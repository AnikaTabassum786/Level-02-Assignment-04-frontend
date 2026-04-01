"use client";



import Link from "next/link";
import { useRouter } from "next/navigation";

type OrderItem = {
  id: string;
  quantity: number;
  price: string;
  medicine: {
    name: string;
  };
};

type Order = {
  id: string;
  totalAmount: number;
  status: string;
  shippingAddress: string;
  orderItems: OrderItem[];
};

export default function OrderFromClient({
 orders,
}: {
  orders: Order[];
}) {
 



  return (
    <div className="p-4 space-y-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border rounded-xl p-4 shadow-sm"
        >
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> ৳{order.totalAmount}</p>
          <p><strong>Address:</strong> {order.shippingAddress}</p>
          <Link href={`/orders/${order.id}`}>  <p className="hover:underline"><strong>View Details</strong></p></Link>
          

        </div>
      ))}
    </div>
  );
}