import { useState } from "react";

const User=() =>{

     const [Akshay, setAkshay] = useState("login");

     return(
         <div>
             <h1>Name:akshay saini</h1>
             <h3>Location: Dehradun</h3>
             <h3>contact: @akshaymarch7</h3>
             <p>Birth: 7 october</p>

             <button onClick={() =>{
                         const buttons="logout";
                         setAkshay(buttons);
                     }}>{Akshay}</button>

         </div>
     )
}
export default User;