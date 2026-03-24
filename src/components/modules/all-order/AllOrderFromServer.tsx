

// export default function AllOrderFromServer(){

//   return (
//    <>
//    All Order From Client
//    </>
//   );
// }


import { allOrderService } from "@/services/allOrderService";
import AllOrderFromClient from "./AllOrderFromClient";

export default async function AllOrderFromServer() {
  const res = await allOrderService.getOwnOrders();
  // const res = await allOrderService.getOrderById();

  console.log(res)

  const orders = res?.data?.result || [];
  console.log("Orders",orders)
  return <AllOrderFromClient orders={orders} />;
}