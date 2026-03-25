// "use client";

// export default function AllOrderFromClient(){


//   return (
//    <>
//    All Order From Client
//    </>
//   );
// }

"use client";

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
  if (!orders.length) {
    return <p>No orders found</p>;
  }

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
          <p className="hover:underline"><strong>View Details</strong></p>

          {/* <div className="mt-3">
            <p className="font-semibold">Items:</p>
            {order.orderItems?.map((item) => (
              <div key={item.id} className="ml-3">
                <p>
                  {item.medicine?.name} × {item.quantity} (৳{item.price})
                </p>
              </div>
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
}