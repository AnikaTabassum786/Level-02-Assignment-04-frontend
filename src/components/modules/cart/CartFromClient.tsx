"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { deleteCart } from "@/action/cart.action";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

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
      toast.success("Item deleted successfully");
      router.refresh(); // refresh the server component
    } else {
      toast.error("Failed to delete: " + res.message);
    }
  };

  return (
   <>
    <div>
      <Button onClick={handleDelete} disabled={loading} className="cursor-pointer">
      {loading ? "Deleting..." : "Delete"}
    </Button>
    </div>

   
   </>
  );
}