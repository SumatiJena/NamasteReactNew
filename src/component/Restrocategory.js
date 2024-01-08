import { useState } from "react"
import Listitem from "./Listitem"
const Restrocategory=({category,expand, showIndex})=>{
    const onExpand=()=>{
        showIndex()
    }
    return (
        <div className="bg-gray-200 my-8 w-6/12 mx-auto shadow-lg py-1 px-2 ">
        <div className="flex justify-between">
            <span className="font-bold">{category.title} ({category.itemCards.length})</span>
            <span onClick={onExpand}>🔽</span>
        </div>
        {expand && <Listitem list={category.itemCards}/>}
        </div>
    )
}
export default Restrocategory