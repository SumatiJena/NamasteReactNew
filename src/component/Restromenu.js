import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
const Restromenu=()=>{

    const {resId} =useParams();
    const restMeun=useRestaurantMenu(resId)
    return(
        <div className="restroMenu">
           <ul>
            {restMeun.map((item)=>{
                return <li>
                    {item.card.info.name}
               </li>
            })}
           </ul>
        </div>
    )
}
export default Restromenu;