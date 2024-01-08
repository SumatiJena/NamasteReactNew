import { useEffect, useState } from "react";
const useRestaurantMenu=(resId)=>{
    const [restMeun,setRestMenu]=useState(null)
    useEffect(()=>{
        FeatchRastroMenu();
    },[])
    const FeatchRastroMenu=async()=>{
        const menu= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.285737792374665&lng=85.7916499301791&restaurantId="+resId);
        const menuData= await menu.json();
        setRestMenu(menuData);
       // menuData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    }
    return restMeun;
}
export default useRestaurantMenu;