import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./restaurantCategory";

const RestaurantMenu = () => {
    const {Id} = useParams();
     
    const [resInfo, setresInfo] = useState(null);
 
    useEffect(() => {
       fetchMenu();
    }, [])
 
    const fetchMenu = async () => {
       const datas = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId="+ Id) ;
       const jsons = await datas.json();
       console.log(jsons);
      
       setresInfo(jsons.data);
    }
    
     
     if(resInfo === null)
     {
        return <h1>namesta react</h1>
     }
 
      const{
        name,
        cuisines,
        areaName,
        costForTwoMessage,
        avgRating,
      } = resInfo?.cards[0]?.card?.card?.info;
      
       
      const {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
       console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
 
        const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 
        console.log("c",categories);
          
    return (
       <div>
          <div className="menu flex justify-evenly items-center w-6/12 m-auto text-lg mb-14">
 
             <div className="left">
                <h1 className="font-bold text-2xl uppercase">{name}</h1>
                <p>{cuisines.join(",")}</p>
                <h3>{areaName}, {costForTwoMessage}</h3>
             </div>,
 
             <div className="right">
                <p>{"⭐" + avgRating}</p>
             </div>
          </div>
 
          <div className="menu-list">
            <div>

            {
                categories.map((category)=>(
                  <RestaurantCategory data={category.card.card}/>
                ))
             }
             
 
            </div>
          </div>
          
       </div>
 
    )
 }

export default RestaurantMenu;
