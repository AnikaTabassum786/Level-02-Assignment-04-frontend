import { cartService } from "@/services/cartService";
import OrderFromClient from "./OrderFromClient";

export default async function OrderFromServer() {
  const res = await cartService.getAllOwnCartItems();

  const items = res?.data?.items || [];
  const totalPrice = res?.data?.totalPrice || 0;

  return (
    <OrderFromClient items={items} totalPrice={totalPrice} />
  );
}