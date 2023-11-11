import { useState, useEffect } from "react";
const Hello=(props) =>{
 
     const {
         name,
         location,
     }= props;
      
      const [TReact, setTReact]=useState();
      const [Button, setButton] = useState("login");
      const [Loc , setLoc]= useState(0);

       useEffect(()=>{
         fetchInfo();
       },[])

       const fetchInfo= async ()=>{
          const Info= await fetch("https://api.github.com/users/akshaymarch7")
          const json= await Info.json();

            setTReact(json);
       }
     
     return(
         <div>
            <h1>name : {name}</h1>
            <h2>loaction : {location} 🚀</h2>
            <p>nice to meet you</p>

            <button onClick={() =>{
             const buttons="logout";
             setButton(buttons);
            }}>{Button}</button>

            <button  onClick={() =>{
                 const set="hi";
                 setLoc(set);
                
            }} >{Loc}</button>
             

         </div>
     )
}

 export default Hello;