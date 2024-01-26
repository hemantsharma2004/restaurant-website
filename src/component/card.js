
import { CON_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Card=(props)=>{
    const {resData}= props;

     const{
        cloudinaryImageId,
         name,
         avgRating,
         locality,
         costForTwo,
         cuisines,
         id,
     }= resData?.info;

     return (
        <Link to={`restaurants/`+ id}> <div className="w-[200px] bg-gray-300 rounded-lg m-4 mt-7">
            <div className="rounded-xl">
               <img className="w-[186px] h-[130px] pl-3  pt-5 rounded-xl" src={CON_URL + cloudinaryImageId} />
             </div>

             <div className="text-left py-3 pl-3">
                <h3>{name}</h3>
                <h3 className="w-[98%]  pr-2 overflow-hidden">{cuisines}</h3>
                <h3>{costForTwo}</h3>
                <h3>{avgRating} ⭐</h3>
                <h3>{locality}</h3>
             </div> 
         </div>
         </Link> 
     )
}

  export const withPromotedLabel=(Card)=>{
     return(props)=>{
         return(
             <div>
                  <label className="absolute bg-orange-400 text-white rounded-xl p-2 mt-7 ml-5">open</label>
                  <Card  {...props}/>
             </div>
         )
     }
 }


export default Card;
