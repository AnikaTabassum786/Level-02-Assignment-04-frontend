import CartFromClient from "@/components/modules/cart/CartFromClient";
import CartFromServer from "@/components/modules/cart/CartFromServer";


export default function  CartPage(){
    return(
        <div>
            Cart Page
           <CartFromClient></CartFromClient>
           <CartFromServer></CartFromServer>
        </div>
    )
}