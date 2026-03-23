"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { deleteCart } from "@/action/cart.action";
import { useRouter } from "next/navigation";

interface Props {
  cartId: string;
}

export default function CartFromClient({ cartId }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // for refreshing Server Component

  const handleDelete = async () => {
    setLoading(true);
    const res = await deleteCart(cartId); // server action
    setLoading(false);

    if (res.success) {
      alert("Item deleted successfully");
      router.refresh(); // refresh the server component
    } else {
      alert("Failed to delete: " + res.message);
    }
  };

  return (
    <Button onClick={handleDelete} disabled={loading}>
      {loading ? "Deleting..." : "Delete"}
    </Button>
  );
}