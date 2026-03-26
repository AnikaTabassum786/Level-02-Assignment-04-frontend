

import { orderService } from "@/services/orderService";
import AllOrdersClient from "./AllOrdersClient";

export default async function AllOrderServer() {
  const res = await orderService.getOwnOrders();
  const orders = res?.data || [];

  console.log(orders);

  return <AllOrdersClient orders={orders} />;
}