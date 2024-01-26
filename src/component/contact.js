
import { useState } from "react";

const Contact=()=>{
    
    return(
       
        <div className="mt-10 flex justify-evenly items-center pr-20">
            <div className="child">
                    <img className="  w-120"  src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX48908713.jpg" />
            </div>

            <div className="child   w-[500px] h-[400px] pr-26">
            <form className="mx-auto text-center">
               <h1 className="font-bold text-2xl text-orange-500 mb-6 pt-10" >CONTACT US</h1>
               <input type="text" className="border border-black w-[320px] h-[40px] shadow-orange-300 mb-4 rounded-lg pl-1 pt-1" placeholder="Name"/><br></br>
               <input type="email" className="border border-black w-[320px] h-[40px] shadow-orange-400 mb-4 rounded-lg pl-1 pt-1" placeholder="Email"/><br></br>
               <input type="text" className="border border-black w-[320px] h-[100px] shadow-orange-300  mb-4 rounded-lg pl-1 pt-1" placeholder="Message"/><br></br>
               <button className="bg-orange-500 text-white font-bold p-2 rounded-lg">Submit</button>
            </form>
            </div>
            </div>
    )
}
export default Contact;
