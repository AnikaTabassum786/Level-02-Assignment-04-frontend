import { reviewService } from "@/services/reviewService";
import AllReviewsClient from "./AllReviewsClient";


export default async function AllReviewServer() {

    const res = await reviewService.getReviews();
    const reviews = res?.data || [];

  console.log(reviews)

  return <AllReviewsClient reviews={reviews} />;
}