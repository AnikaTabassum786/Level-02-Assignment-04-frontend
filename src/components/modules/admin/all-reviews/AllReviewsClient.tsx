"use client";

type Review = {
  id:string;
  comment?: string;
  rating: string;

  user:{
    email:string;
  };

  medicine:{
    name:string;
  };
 
};


export default function AllReviewsClient({ reviews }: { reviews: Review[] }) {


  return (
    <>
     <div>
      <h1 className="text-xl font-semibold mb-4">All Reviews</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border">User</th>
              <th className="text-left p-3 border">Medicine</th>
              <th className="text-left p-3 border">Rating</th>
              <th className="text-left p-3 border">Comment</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="hover:bg-gray-50">
                
                
                <td className="p-3 border">{review.user.email}</td>
                <td className="p-3 border">{review.medicine.name}</td>
                <td className="p-3 border">{review.rating}</td>
                <td className="p-3 border">{review.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}