import ItemList from "./itemList";
import { useState  } from "react";

const RestaurantCategory=({data})=>{
    console.log("data",data);

       const [ShowItems, setShowItems]= useState(false);
      const handleClick=()=>{
          setShowItems( !ShowItems);
      }

     return (
         <div className="w-6/12 mx-auto mt-8 bg-gray-300 p-4 rounded-lg ">
             
             <div className="flex justify-between items-center mb-5" onClick={handleClick}>
                <span className="text-lg font-extrabold text-orange-500">{data.title} ({data.itemCards.length})</span>
                 <span>⬇️</span>
             </div>

         {ShowItems && <ItemList items={data.itemCards}/>}
 
         </div>
     )
}

export default RestaurantCategory;