import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Restromenu=()=>{
    const [restMeun,setRestMenu]=useState([])
    const {resId} =useParams();
    console.log(resId)
    useEffect(()=>{
        FeatchRastroMenu();
    },[])
    const FeatchRastroMenu=async()=>{
        const menu= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.285737792374665&lng=85.7916499301791&restaurantId="+resId);
        const menuData= await menu.json();
        console.log(menuData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards
            )
        setRestMenu(menuData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards);
    }
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