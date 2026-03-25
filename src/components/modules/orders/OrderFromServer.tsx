

import { orderService } from "@/services/orderService";
import OrderFromClient from "./OrderFromClient";


export default async function OrderFromServer() {
  const res = await orderService.getOwnOrders()
  // const res = await allOrderService.getOrderById();

  console.log(res)

  const orders = res?.data?.result || [];
  console.log("Orders",orders)
  return <OrderFromClient orders={orders} />;
}