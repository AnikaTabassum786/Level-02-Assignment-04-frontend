"use client";

import { useSearchParams } from "next/navigation";
import AddReviewClient from "@/components/modules/review/AddReviewClient";

export default function ReviewContent() {
  const searchParams = useSearchParams();
  const medicineId = searchParams.get("medicineId");

  if (!medicineId) {
    return <div>Invalid request</div>;
  }

  return (
    <div className="p-6">
      <AddReviewClient medicineId={medicineId} />
    </div>
  );
}