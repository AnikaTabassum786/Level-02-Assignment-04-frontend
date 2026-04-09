
// "use client";

// import Link from "next/link";

// type Order = {
//   id: string;
//   shippingAddress: string;
// };

// type Props = {
//   orders: Order[];
// };

// export default function AllOrdersClient({ orders }: Props) {
//   return (
//     <div>
//       <h1>All Orders</h1>

//       {orders.map((order) => (
//         <div  key={order.id}>
//             <p>{order.id}</p>
//           <p>{order.shippingAddress}</p>
// <Link href={`/orders/${order.id}`}><p>View Details</p></Link>
//         </div>
//       ))}
//     </div>
//   );
// }

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
    <div className="p-4 md:p-6">
      {/* <h1 className="text-xl font-semibold mb-4">All Orders</h1> */}

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-center py-3 px-4">Order ID</th>
              <th className="text-center py-3 px-4">Shipping Address</th>
              <th className="text-center py-3 px-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="text-center py-3 px-4">{order.id}</td>
                <td className="text-center py-3 px-4">
                  {order.shippingAddress}
                </td>
                <td className="text-center py-3 px-4">
                  <Link
                    href={`/orders/${order.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}