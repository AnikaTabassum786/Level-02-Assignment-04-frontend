
import { cartService } from "@/services/cartService";
import CartFromClient from "./CartFromClient";

export default async function CartFromServer() {
  const res = await cartService.getAllOwnCartItems();
  const cartItems = res?.data?.items || [];
  const totalPrice = res?.data?.totalPrice || 0;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item: any) => {
          const price = Number(item.medicine?.price || 0);
          const subtotal = item.quantity * price;

          return (
            <div key={item.id} className="border p-3 rounded mb-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.medicine?.name || "No Name"}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="font-semibold">Price: {price}</p>
                  <p className="text-gray-600 text-sm">
                    ({item.quantity} × {price} = {subtotal})
                  </p>
                </div>
                <CartFromClient cartId={item.id} />
              </div>
            </div>
          );
        })
      )}

      <p className="mt-4 font-bold">Total: {totalPrice}</p>
    </div>
  );
}