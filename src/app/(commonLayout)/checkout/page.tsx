export const dynamic = "force-dynamic";

import CheckoutFromServer from "@/components/modules/checkout/CheckoutFromServer";


export default function  CheckoutPage(){
    return(
        <div>
            Order Page
           <CheckoutFromServer></CheckoutFromServer>
        </div>
    )
}