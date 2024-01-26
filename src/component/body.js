import Card from "./component/card";
import resobj from "../utils/mock_data";
import { useState ,useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./component/card";

const Body=()=>{
  
     const [ListOfRestaurant , setListOfRestaurant] = useState(resobj);
     const [SearchText , setSearchText]=useState();

      const Online=useOnlineStatus();

       const PromotedCard=withPromotedLabel(Card);

       if(Online === false){
         return <h1>Plz Check Your Network</h1>
       }

      useEffect(()=>{
       fetchData();
      },[]);

      const fetchData= async ()=>{
         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4410726&lng=77.0527716&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const item= await data.json();

          
          setListOfRestaurant(item?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || item?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }

     return(
         <div className="grandParent">

            <div className="parent  flex justify-evenly items-center ">
                 <div>
                    <button className="bg-orange-500 rounded-xl font-bold p-2 text-white" onClick={()=>{
                         const filter=ListOfRestaurant.filter((res)=>
                          res.info.avgRating > 4);
                          setListOfRestaurant(filter);
                    }}>Top Rated Restaurant</button>
                 </div>


                 <div className="search ">
          <input type="text" value={SearchText} className="search-box outline-double outline-orange-400 w-60 p-1 rounded-lg mr-1" onChange={(e) => {
            setSearchText(e.target.value);
          }} />

          <button className=" bg-orange-600 p-2 rounded-lg font-bold text-white" onClick={() => {
            const set = ListOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(SearchText.toLowerCase()))

            setListOfRestaurant(set);
          }}>Search</button>

        </div>
            </div>


            <div className="card-container flex justify-evenly items-center flex-wrap px-10">
                 {
                     ListOfRestaurant.map((restauant)=>
                     restauant.info.isOpen ? <PromotedCard  resData={restauant}/> :
                     <Card  resData={restauant}/> )
                 }
                
                 
                  
            </div>
         </div>
     )
}

export default Body;
