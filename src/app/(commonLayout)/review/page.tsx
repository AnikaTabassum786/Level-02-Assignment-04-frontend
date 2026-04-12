// "use client";

// import AddReviewClient from "@/components/modules/review/AddReviewClient";
// import { useSearchParams } from "next/navigation";


// export default function ReviewPage() {
//   const searchParams = useSearchParams();
//   const medicineId = searchParams.get("medicineId");

//   if (!medicineId) {
//     return <div>Invalid request</div>;
//   }

//   return (
//     <div className="p-6">
//       <AddReviewClient medicineId={medicineId} />
//     </div>
//   );
// }

"use client";

import { Suspense } from "react";
import ReviewContent from "./ReviewContent";


export default function ReviewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReviewContent />
    </Suspense>
  );
}