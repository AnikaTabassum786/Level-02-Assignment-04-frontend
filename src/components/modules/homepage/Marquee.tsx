"use client";

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-gray-100 text-white py-2 ">
      <div className="flex gap-10 whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-10 text-black">
            <span> Discount Available</span>
            <span> Free Delivery</span>
            <span> 24/7 Service</span>
            <span> Trusted Medicines</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;