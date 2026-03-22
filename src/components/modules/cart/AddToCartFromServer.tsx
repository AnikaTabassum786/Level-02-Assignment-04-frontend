// import { createCart } from "@/action/cart.action";
// import { Button } from "@/components/ui/button";


// export default function AddToCartFromServer({
//   medicineId,
// }: {
//   medicineId: string;
// }) {
//   return (
//     <form
//       action={async () => {
//         "use server";

//         const res = await createCart({
//           medicineId,
//           quantity: 1,
//         });

//         if (res?.error) {
//           console.log("Error:", res.error);
//         } else {
//           console.log("Added to cart");
//         }
//       }}
//     >
//       <Button type="submit" className="w-1/3">
//         Add to Cart
//       </Button>
//     </form>
//   );
// }