
import { cartService } from "@/services/cartService";

export default async function CartFromServer() {
  const res = await cartService.getAllOwnCartItems();

  console.log("Cart Items:", res);

const cartItems = res?.data?.items || []; 
console.log(cartItems)

const totalPrice = res?.data?.totalPrice;
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item: any) => (
          <div
            key={item.id}
            className="border p-3 rounded mb-2 flex justify-between"
          >
            <div>
              <p className="font-medium">
                {item.medicine?.name || "No Name"}
              </p>
              <p>Quantity: {item.quantity}</p>
            </div>

            <p className="font-semibold">
              ৳ {item.medicine?.price}
            </p>
          </div>
        ))
      )}

      <p className="mt-4 font-bold">
  Total: ৳ {totalPrice}
</p>
    </div>
  );
}