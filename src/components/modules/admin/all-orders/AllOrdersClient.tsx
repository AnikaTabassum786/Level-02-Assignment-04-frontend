
"use client";

import Link from "next/link";

type Order = {
  id: string;
  shippingAddress: string;
};

type Props = {
  orders: Order[];
};

export default function AllOrdersClient({ orders }: Props) {
  return (
    <div>
      <h1>All Orders</h1>

      {orders.map((order) => (
        <div  key={order.id}>
            <p>{order.id}</p>
          <p>{order.shippingAddress}</p>
<Link href={`/orders/${order.id}`}><p>View Details</p></Link>
        </div>
      ))}
    </div>
  );
}