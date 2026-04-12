"use client";

import { useState, useTransition } from "react";
import { RiStarLine, RiStarFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createReview } from "@/action/review.action";
import { toast } from "sonner";

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
      toast.warning("Please select rating");
      return;
    }

    startTransition(async () => {
      const res = await createReview({
        medicineId,
        rating,
        comment,
      });

      if (res?.error) {
        // toast.error(res.error);
         toast.error(String(res.error));
      } else {
        toast.success("Review submitted!");
        setRating(0);
        setComment("");
      }
    });
  };

  return (
    <div className="max-w-md space-y-4 mx-auto">
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
      <Button className="cursor-pointer" onClick={handleSubmit} disabled={!rating || isPending}>
        {isPending ? "Submitting..." : "Submit Review"}
      </Button>
    </div>
  );
}