import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Restrocategory from "./Restrocategory";
import { useState } from "react";


const Restromenu=()=>{
  const [showIndex, setShowIndex]=useState(0)
  const {resId} =useParams();
  const restMeun=useRestaurantMenu(resId);
  if(restMeun==null) return <Shimmer/>  
  const {name, cuisines}=restMeun?.data?.cards[0]?.card?.card?.info;
  const Category=restMeun?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>{
    return c.card.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })
  return(
        <div className="text-center">
          <h1>{name}</h1>
          <p>{cuisines}</p>
          {Category.map((item,index)=>{
            return <Restrocategory key={item.card.title} category={item.card.card} expand={index==showIndex?true:false} showIndex={()=>showIndex==index?setShowIndex(null):setShowIndex(index)}/>
          })}
        </div>
    )
}
export default Restromenu;