import { useState } from "react";
import { Link } from "react-router-dom";

const Header=() =>{

    const[ButtonReact, setButtonReact] = useState("login");


     return(
         <div className="header">
              <div className="logo">
                  <img src="https://i.pinimg.com/736x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg"></img>
              </div>

              <div className="nav-links">
                  <ul className="flex">
                     <li>
                         < Link to="/">home</Link>
                        </li>

                        <li>
                         < Link to="/About">About us</Link>
                        </li>

                        <li>
                         < Link to="/Contact">Contact us</Link>
                        </li>

                       
                        

                     

                     <button onClick={() =>{
                         const button="logout";
                         setButtonReact(button);
                     }}>{ButtonReact}</button>

                  </ul>
              </div>
         </div>
     )
}

export default Header;