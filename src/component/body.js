import Card from "./card";
import resobj from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {

  const [ListOfRestaurant, setListOfRestaurant] = useState(resobj);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.679466959904303&lng=77.50065922737122&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await  data.json();
    
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  }

 
   

  return (
    <div className="body">
      <div className="filter">

        <div className="top">

          <button onClick={() => {
            const filterList = ListOfRestaurant.filter((res) =>
              res.info.avgRating > 4)
            setListOfRestaurant(filterList);

          }}>Top Rated Restaurant</button>
        </div>


        <div className="search">
          <input type="text" value={SearchText} className="search-box" onChange={(e) => {
            setSearchText(e.target.value);
          }} />

          <button onClick={() => {
            const set = ListOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(SearchText.toLowerCase()))

            setListOfRestaurant(set);
          }}>Search</button>
        </div>
      </div>


      <div className="cart-container">
      {
          ListOfRestaurant.map((restaurant) =>
            <Card resData={restaurant} />)
           
        }
  

      </div>
    </div>
  )
}

export default Body;