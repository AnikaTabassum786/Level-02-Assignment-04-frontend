
export const dynamic = "force-dynamic";
import AllMedicineClient from "@/components/modules/seller/all-medicine/AllMedicineClient";
import AllMedicineServer from "@/components/modules/seller/all-medicine/AllMedicineServer";

export default async function AllMedicinePage() {

    return (
        <>
            {/* <AllMedicineClient/> */}
            <AllMedicineServer/>
        </>
    )
}