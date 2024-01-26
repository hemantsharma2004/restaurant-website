import { useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import Cart from "./cart";
import { Link } from "react-router-dom";

const Header=()=>{
 const [Button , setButton]= useState("login");
 
  const Online=useOnlineStatus();

   const cartItems=useSelector((store)=> store.cart.items);

     return (
           <div className="parent mb-10 flex justify-between items-center px-2  pt-0  Border border-red-700 shadow-lg">
            
             <div>
                 <img className="w-[120px]" src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"></img>
             </div>

             <div>
                  <ul className="flex w-[500px] text-lg">
                    <li className="mr-5">{Online ? "🟢" : "🔴" }</li>
                    <li className="mr-4">
                      <Link to="/" >home</Link>
                      </li>

                    <li className="mr-4">
                      <Link to="contact"> contact</Link>
                      </li>

                    <li className="mr-4">
                     <Link to="about"> about </Link> 
                      </li>

                    <li className="mr-7">
                     <Link to="cart"> 🛒 ({cartItems.length} Items)</Link> 
                      </li>
                    <button className="bg-orange-500 text-lg p-1 rounded-lg text-white" onClick={()=>{
                       const buttons="logout";
                       setButton(buttons);
                    }}>{Button}</button>
                  </ul>
             </div>
           </div>
     )
}

export default Header;
