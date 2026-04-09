import Image from "next/image";
import { medicineService } from "@/services/medicine.service";
import AddToCartFromClient from "@/components/modules/add-to-cart/AddToCartFromClient";


export default async function MedicineDetailsPage({params,}: {params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("Server ID:", id);
  const medicine = await medicineService.getMedicineById(id);
  console.log("Server Response:", medicine);

  if (!medicine) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold">Medicine Not Found</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center pt-12">
      <div className="">

        {/* Image */}
        {/* <div className="relative w-full h-[400px]">
          <Image
            src={`http://localhost:5000${medicine.imageURL}`}
            alt={medicine.name}
            fill
            className="object-cover rounded-lg"
          /> 
        </div> */}

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{medicine.name}</h1>

          <p className="text-gray-600">{medicine.description}</p>

          <p className="text-xl font-semibold text-green-600">
            ৳ {medicine.price}
          </p>

          <p className="text-md">
            Stock: <span className="font-medium">{medicine.stock}</span>
          </p>
           <AddToCartFromClient medicineId={medicine.id}/>
        </div>
      </div>
      
    </div>
  );
}


