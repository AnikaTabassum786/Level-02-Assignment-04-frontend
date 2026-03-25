import { orderService } from "@/services/orderService";
import OrderDetailsFromClient from "./OrderDetailsFromClient";


const OrderDetailsFromServer = async ({ id }: { id: string }) => {
  const res = await orderService.getOrderById(id);

  const order = res; 

  if (!order) {
    return <p>Order not found</p>;
  }

  return <OrderDetailsFromClient order={order} />;
};

export default OrderDetailsFromServer;
