"use client";

import { useState, useTransition } from "react";
import { RiStarLine, RiStarFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createReview } from "@/action/review.action";

export default function AddReviewClient({
  medicineId,
}: {
  medicineId: string;
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    if (!rating) {
      alert("Please select rating");
      return;
    }

    startTransition(async () => {
      const res = await createReview({
        medicineId,
        rating,
        comment,
      });

      if (res?.error) {
        alert(res.error);
      } else {
        alert("Review submitted!");
        setRating(0);
        setComment("");
      }
    });
  };

  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-lg font-semibold">Write a Review</h2>

      {/* ⭐ Rating */}
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="cursor-pointer text-2xl"
          >
            {star <= (hover || rating) ? (
              <RiStarFill className="text-yellow-500" />
            ) : (
              <RiStarLine className="text-gray-400" />
            )}
          </span>
        ))}
      </div>

      {/* ✍️ Comment */}
      <Textarea
        placeholder="Write your review (optional)..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {/* Submit */}
      <Button onClick={handleSubmit} disabled={!rating || isPending}>
        {isPending ? "Submitting..." : "Submit Review"}
      </Button>
    </div>
  );
}