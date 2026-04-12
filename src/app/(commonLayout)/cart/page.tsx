export const dynamic = "force-dynamic";
import CartFromServer from "@/components/modules/cart/CartFromServer";


export default function  CartPage(){
    return(
        <div>
            {/* Cart Page */}
           <CartFromServer></CartFromServer>
        </div>
    )
}