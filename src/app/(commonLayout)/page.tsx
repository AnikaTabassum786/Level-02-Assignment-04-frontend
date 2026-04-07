import { MedicineCard } from "@/components/modules/homepage/medicineCard";
import { SearchBy } from "@/components/modules/homepage/SearchBy";
import { medicineService } from "@/services/medicine.service";
import { userService } from "@/services/user.service";
import { Medicine } from "@/types";


export default async function Home() {

  const { data } = await userService.getSession();
  console.log(data)

  const medicines = await medicineService.getMedicines();
  console.log(medicines);

  return (
    <>
    <SearchBy></SearchBy>
    <div className="flex  items-center justify-center bg-zinc-00 font-sans dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-6">
        {
          medicines?.data?.data?.map((medicine: Medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))
        }
      </div>
    </div>
    </>
  );
}
