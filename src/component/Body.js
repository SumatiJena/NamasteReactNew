import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import { restroItem } from "../../utils/Constatnt";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body=()=>{
    const [resData, setResData]=useState([]);
    const [inputValue,setInputValue]=useState();
    const [searchText, setSearchText]=useState(inputValue);
    const [searchDefaultData,setSearchDefaultData]=useState([])
    useEffect(()=>{
        featchData();
    },[])
    const featchData=async ()=>{
        const data=await fetch(restroItem);
       const jsonData=await data.json();
       setResData(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
       setSearchDefaultData(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
   const filterData=()=>{
    const resfilterData=searchDefaultData.filter((item)=>{
        return item.info.avgRating>4
    })
    setSearchDefaultData(resfilterData);
   }
const searchData=()=>{
   const filterRestor= resData.filter((data)=>{
        return data.info.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    setSearchDefaultData(filterRestor)
}
    return(
        searchDefaultData.length==0?<Shimmer/>
        :(<div className="body">  
            <div className="search">
                <div className="inputSear">
                    <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/> 
                    <button onClick={searchData}>Search</button>
                </div>
                <button onClick={filterData}>Top restaurans</button>
            </div>
            <div className="restoContainer">
                {searchDefaultData.map((restaurant)=>{
                    return  <Link to={"/restaurant/"+ restaurant.info.id}><RestroCard restroData={restaurant} /></Link>
                    }) 
                }
            </div>
        </div>
    )
    )
}
export default Body;
