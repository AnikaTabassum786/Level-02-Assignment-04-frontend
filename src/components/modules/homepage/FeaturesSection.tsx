const features = [
  {
    title: "Fast Delivery",
    desc: "Get medicines delivered quickly at your doorstep",
  },
  {
    title: "Genuine Medicines",
    desc: "100% authentic and verified medicines",
  },
  {
    title: "24/7 Support",
    desc: "We are here to help anytime",
  },
  {
    title: "Easy Ordering",
    desc: "Simple and user-friendly ordering system",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-6 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl text-center hover:shadow-md transition"
          >
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection