export const dynamic = "force-dynamic";
import OrderFromServer from "@/components/modules/orders/OrderFromServer";

export default function  AllOrderPage(){

    return(
        <div>
            {/* <p>This is All order page component</p> */}
             <OrderFromServer/>
        </div>
    )
}