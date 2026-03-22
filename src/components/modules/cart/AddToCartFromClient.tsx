"use client";

import { createCart } from "@/action/cart.action";
import { Button } from "@/components/ui/button";

export default function AddToCartFromClient({ medicineId }: { medicineId: string }) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevents page reload

    const res = await createCart({
      medicineId,
      quantity: 1,
    });

    if (res?.error) {
      console.log("Error:", res.error);
      alert("Failed to add to cart");
    } else {
      console.log("Added to cart");
      alert("Added to cart successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" className="w-1/3">
        Add to Cart
      </Button>
    </form>
  );
}
