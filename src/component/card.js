import resobj from "../../utils/mockData";
 import {CON_URL} from "../../utils/constants";

const Card=(props) =>{
      const {resData} = props;

       const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
       }=resData?.info;


     return(
         <div className="card">
             <div className="image">
                     <img src={CON_URL + cloudinaryImageId}/>
             </div>

             <div  className="text">
                 <h3>{name}</h3>
                 <h4>{cuisines}</h4>
                  <p>{avgRating}</p>
                  <p>{costForTwo}</p>
             </div>
         </div>
     )
}

export default Card;