import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Medicine } from "@/types"
import Link from "next/link"


export function MedicineCard({ medicine }: { medicine: Medicine }) {
  return (
    <>
    <Card className="w-full max-w-sm flex flex-col overflow-hidden hover:shadow-xl transition">

      {/* Medicine Image */}
      <div className="relative w-full h-48 bg-gray-100">
        {/* <Image
          src={`http://localhost:5000${medicine.imageURL}`}
          alt={medicine.name}
          fill
          className="object-cover"
        /> */}
      </div>

      {/* Header */}
      <CardHeader>
        <CardTitle className="text-lg">{medicine.name}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {medicine.manufacturer}
        </p>
      </CardHeader>

      {/* Description */}
      <CardContent className="flex flex-col flex-1 gap-2">
        <p className="text-md text-gray-600 line-clamp-1">
          {medicine.description}
        </p>

        {/* <p className="flex justify-end text-sm hover:underline hover:cursor-pointer hover:duration-300 hover:scale-95">Read more</p> */}

        <Link
          href={`/medicines/${medicine.id}`}
          className="flex justify-end text-sm hover:underline hover:cursor-pointer hover:duration-300 hover:scale-95"
        >
          Read more
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">
            ৳ {medicine.price}
          </span>

          <span className="text-sm text-gray-500">
            Stock: {medicine.stock}
          </span>
        </div>
      </CardContent>

      {/* Footer */}
      {/* <CardFooter className="flex gap-2 justify-between p-4">
        <Button className="w-full">Add to Cart</Button>
        <Button variant="outline" className="w-1/2">
          Details
        </Button>
      </CardFooter> */}

    </Card>
    </>
  )
}