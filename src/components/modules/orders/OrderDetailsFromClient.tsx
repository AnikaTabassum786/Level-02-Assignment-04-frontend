// "use client";

// type OrderItem = {
//   id: string;
//   quantity: number;
//   price: string;
//   medicine: {
//     name: string;
//   };
// };

// type Order = {
//   id: string;
//   totalAmount: string;
//   status: string;
//   shippingAddress: string;
//   orderItems: OrderItem[];
// };

// export default function OrderDetailsFromClient({
//   order,
// }: {
//   order: Order;
// }) {
//   return (
//     <div className="max-w-4xl mx-auto p-5 space-y-6">
      
//       {/* Order Info */}
//       <div className="border p-4 rounded-lg">
//         <p><strong>Order ID:</strong> {order.id}</p>
//         <p><strong>Status:</strong> {order.status}</p>
//         <p><strong>Total:</strong> ৳{order.totalAmount}</p>
//         <p><strong>Address:</strong> {order.shippingAddress}</p>
//       </div>

//       {/* Items */}
//       <div>
//         <h2 className="text-lg font-semibold mb-2">Items</h2>

//         {order.orderItems.map((item) => (
//           <div key={item.id} className="border p-3 rounded mb-2">
//             <p>{item.medicine.name}</p>
//             <p>Qty: {item.quantity}</p>
//             <p>Price: ৳{item.price}</p>
//             <p>
//               Subtotal: ৳{Number(item.price) * item.quantity}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useRouter } from "next/navigation";

type OrderItem = {
  id: string;
  quantity: number;
  price: string;
  medicineId: string;
  medicine: {
    name: string;
  };
};

type Order = {
  id: string;
  totalAmount: string;
  status: string;
  shippingAddress: string;
  orderItems: OrderItem[];
};

export default function OrderDetailsFromClient({ order }: { order: Order }) {
  const router = useRouter();

  const handleReview = (medicineId: string) => {
    router.push(`/review?medicineId=${medicineId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 space-y-6">
      
      {/* Order Info */}
      <div className="border p-4 rounded-lg">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Total:</strong> ৳{order.totalAmount}</p>
        <p><strong>Address:</strong> {order.shippingAddress}</p>
      </div>

      {/* Items */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Items</h2>

        {order.orderItems.map((item) => (
          <div key={item.id} className="border p-3 rounded mb-2">
            <p>{item.medicine.name}</p>
            <p>Qty: {item.quantity}</p>
            <p>Price: ৳{item.price}</p>
            <p>Subtotal: ৳{Number(item.price) * item.quantity}</p>

            {order.status === "DELIVERED" && (
              <button
                onClick={() => handleReview(item.medicineId)}
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
              >
                Leave Review
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}