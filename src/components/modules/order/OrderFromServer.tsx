

// export default function AllOrderFromServer(){

//   return (
//    <>
//    All Order From Client
//    </>
//   );
// }



import OrderFromClient from "./OrderFromClient";
import { orderService } from "@/services/orderService";


export default async function OrderFromServer() {
  const res = await orderService.getOwnOrders()
  // const res = await allOrderService.getOrderById();

  console.log(res)

  const orders = res?.data?.result || [];
  console.log("Orders",orders)
  return <OrderFromClient orders={orders} />;
}