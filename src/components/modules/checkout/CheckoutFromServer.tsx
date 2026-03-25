import { cartService } from "@/services/cartService";
import OrderFromClient from "./CheckoutFromClient";
import CheckoutFromClient from "./CheckoutFromClient";

export default async function CheckoutFromServer() {
  const res = await cartService.getAllOwnCartItems();

  const items = res?.data?.items || [];
  const totalPrice = res?.data?.totalPrice || 0;

  return (
   <>
    {/* <OrderFromClient items={items} totalPrice={totalPrice} /> */}
    <CheckoutFromClient items={items} totalPrice={totalPrice}></CheckoutFromClient>
   </>
  );
}