import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import { restroItem } from "../../utils/Constatnt";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useContext } from "react";
import Usercontext from "../../utils/Usercontext";

const Body=()=>{
    const [resData, setResData]=useState([]);
    const [inputValue,setInputValue]=useState();
    const [searchDefaultData,setSearchDefaultData]=useState([])
    const {user, setUserName}=useContext(Usercontext)
    useEffect(()=>{
        featchData();
    },[])
    const featchData=async ()=>{
        const data=await fetch(restroItem);
       const jsonData=await data.json();
       setResData(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setSearchDefaultData(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
    setSearchDefaultData(filterRestor);
}
const online=useOnlineStatus();
if(online==false){
    return <div>Please check your internet</div>
}
    return(
        searchDefaultData?.length==0?<Shimmer/>
        :(<div className="body mt-10 p-4">  
            <div className="flex">
                <div className="inputSear">
                    <input type="text" className="border-2 h-8 rounded-md mr-4" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/> 
                    <button onClick={searchData} className="bg-green-100 px-4 py-2 rounded-md">Search</button>
                </div>
                <button onClick={filterData} className="ml-4 bg-red-400 rounded-md px-4">Top restaurans</button>
                <input type="text" className="border border-black mx-4" value={user} onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>
            <div className="mt-8 flex flex-wrap">
                {searchDefaultData?.map((restaurant)=>{
                    return  <Link to={"/restaurant/"+ restaurant.info.id}>
                        <RestroCard restroData={restaurant} />
                    </Link>
                }) 
                }
            </div>
        </div>
    )
    )
}
export default Body;
