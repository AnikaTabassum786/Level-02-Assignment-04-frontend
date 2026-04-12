export const dynamic = "force-dynamic";

import AccordionDesign from "@/components/modules/homepage/AccordionDesign";
import FeaturesSection from "@/components/modules/homepage/FeaturesSection";
import Marquee from "@/components/modules/homepage/Marquee";
import { MedicineCard } from "@/components/modules/homepage/medicineCard";
import { SearchBy } from "@/components/modules/homepage/SearchBy";
import { PaginationControls } from "@/components/ui/pagination";
import { medicineService } from "@/services/medicine.service";
import { userService } from "@/services/user.service";
import { Medicine } from "@/types";
import { Accordion } from "radix-ui";


export default async function Home() {

  const { data } = await userService.getSession();
  console.log(data)

  const medicines = await medicineService.getMedicines();
  console.log("All medicines",medicines);

  const pagination = medicines.data?.pagination || {
    limit: 8,
    page: 1,
    total: 0,
    totalPage: 1
  }

  return (
    <>

    <div className="p-6">
      <Marquee></Marquee>
    </div>
      <div className="flex  items-center justify-center bg-zinc-00 font-sans dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-6">
          {
            medicines?.data?.data?.map((medicine: Medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))
          }
        </div>


      </div>
      <div className="max-w-7xl mx-auto">
        <FeaturesSection></FeaturesSection>
      </div>
      <div className="max-w-2xl mx-auto ">
        <AccordionDesign></AccordionDesign>
      </div>


    </>
  );
}


