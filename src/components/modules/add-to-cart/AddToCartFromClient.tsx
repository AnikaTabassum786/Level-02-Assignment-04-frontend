// "use client";

// import { createCart } from "@/action/cart.action";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

// export default function AddToCartFromClient({ medicineId }: { medicineId: string }) {
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // prevents page reload

//     const res = await createCart({
//       medicineId,
//       quantity: 1,
//     });

//     if (res?.error) {
//       console.log("Error:", res.error);
//       toast.error("Failed to add to cart");
//     } else {
//       console.log("Added to cart");
//       toast.success("Added to cart successfully");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Button type="submit" className="w-full cursor-pointer">
//         Add to Cart
//       </Button>
//     </form>
//   );
// }


"use client";

import { createCart } from "@/action/cart.action";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddToCartFromClient({ medicineId }: { medicineId: string }) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await createCart({
      medicineId,
      quantity: 1,
    });

    if (res?.error) {
      console.log("Error:", res.error);
      toast.error("Failed to add to cart");
    } else {
      console.log("Added to cart");
      toast.success("Added to cart successfully");

      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" className="w-1/2 cursor-pointer">
        Add to Cart
      </Button>
    </form>
  );
}