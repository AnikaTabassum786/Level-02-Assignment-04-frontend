import { orderService } from "@/services/orderService";
import AllOrdersClient from "./AllOrdersClient";



export default async function AllOrdersServer() {
  const res = await orderService.getOrders()
  const orders = res?.data|| [];
  console.log("Seller AlL Orders",orders)

  return <AllOrdersClient initialData={orders} />;
}