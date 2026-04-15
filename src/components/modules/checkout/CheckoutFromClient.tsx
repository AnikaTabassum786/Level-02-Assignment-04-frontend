

"use client";

import { createOrder } from "@/action/order.action";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/providers/CartProvider";
import { toast } from "sonner";

export default function CheckoutFromClient({
  items,
  totalPrice,
}: {
  items: any[];
  totalPrice: number;
}) {
  const [address, setAddress] = useState("");
  const router = useRouter();
  const { setCount } = useCart();

  const handleOrder = async () => {
    if (!address) {
      toast.warning("Please enter shipping address");
      return;
    }

    const orderItems = items.map((item) => ({
      medicineId: item.medicineId,
      quantity: item.quantity,
    }));

    const res = await createOrder({
      shippingAddress: address,
      items: orderItems,
    });

    // console.log("Created order",res)

    if (res?.error) {
      toast.error("Order failed");
      return;
    }

    toast.success("Order placed successfully!");


    setCount(0);
    router.push("/");
  };



  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Checkout</h1>

      {/* Address Input */}
      <input
        type="text"
        placeholder="Enter shipping address"
        className="border p-2 w-full mb-4"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      {/* Items */}
      {items.map((item) => (
        <div key={item.id} className="border p-2 mb-2">
          <p>{item.medicine.name}</p>
          <p>Qty: {item.quantity}</p>
        </div>
      ))}

      <p className="font-bold mt-3">Total: {totalPrice}</p>

      <Button onClick={handleOrder} className="mt-4 cursor-pointer">
        Confirm Order
      </Button>
    </div>
  );
}