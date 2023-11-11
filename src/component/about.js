import React from "react";
import Hello from "./function";
import Home from "./class";


  class About extends React.Component{
     render()
     {
        return(
            <div>
             <Hello name={"first"} location={"dehradun"}/>
   
             <Home name={"second"} location={"dehradun 🚩"}/>
            </div>
        )
     }
  }
   export default About;

