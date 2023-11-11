
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";



const RestaurantMenu = () => {

   const [resInfo, setresInfo] = useState(null);
   const {resId} = useParams();
    
  
   
   useEffect(() => {
      fetchMenu();
   }, [])

   const fetchMenu = async () => {
      const datas = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId=79628&catalog_qa=undefined&submitAction=ENTER") ;
      const jsons = await datas.json();
      console.log(jsons);
     
      console.log(MENU_API);
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
      
     
     const {itemCards} = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
         

     

   return (
      <div>
         <div className="menu">

            <div className="left">
               <h1>{name}</h1>
               <p>{cuisines.join(",")}</p>
               <h3>{areaName}, {costForTwoMessage}</h3>

            </div>,

            <div className="right">
               <p>{"⭐" + avgRating}</p>
            </div>
         </div>

         <div className="menu-list">
            <ul>
               {
               itemCards.map((item) => (
                     <li> key={item.card.info.id} {item.card.info.name} -- {" Rs "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100} </li>))
               }
               
            </ul>
         </div>
         
        
      
      </div>

   )
}



export default RestaurantMenu;