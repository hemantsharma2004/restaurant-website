import ItemList from "./itemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart=()=>{
     const CartItems=useSelector((store)=> store.cart.items);

      const dispatch=useDispatch();
      const handle=()=>{
         dispatch(clearCart())
      }
     
     return(
         <div className="w-6/12 mx-auto">
             <h1 className="mb-10 text-center text-orange-500 text-4xl font-bold ">cart Items</h1>
             
             <div className="p-4"  >
                <button className="bg-orange-500 text-white p-2 rounded-xl text-right mb-8" onClick={handle}>Clear</button>
                 {CartItems.length === 0 && <h1 className="text-center font-extrabold  text-6xl">Plz Add Something In The Cart 🍔🍕 </h1>}
             <ItemList items={CartItems}/>
             </div>
         </div>
     )
}

 export default Cart;