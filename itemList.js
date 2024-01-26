import { CON_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addCart } from "../../utils/cartSlice";

const ItemList=({items})=>{

     const dispatch=useDispatch();

      const AddClick=(item)=>{
         dispatch(addCart(item));
      }
    
     return(
         <div>

            {
                 items.map((item)=>
                 <div className="flex justify-between items-center mb-6  border-gray-900    border-b-2  ">
                  <div>
                      <h1 className="font-bold text-lg">{item.card.info.name}</h1>
                      <h1>$--{item.card.info.price/100}</h1>
                      <p className="w-[450px] mb-8">{item.card.info.description}</p>
                  </div>

                   <div>
                        <button className="bg-black absolute text-white p-2 rounded-xl mt-20 ml-10" onClick={()=>AddClick(item)}>Add +</button>
                        <img className="w-[150px] h-[100px] rounded-lg mb-9" src={CON_URL +  item.card.info.imageId} />
                   </div>

                  </div>


                     )
            }
             
         </div>
     )
}

export default ItemList;