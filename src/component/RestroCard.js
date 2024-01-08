import { useContext } from "react";
import Usercontext from "../../utils/Usercontext";
const RestroCard=(props)=>{
    const {user}=useContext(Usercontext);
    const {restroData}=props;
   const {cloudinaryImageId,name,cuisines,avgRating}=restroData?.info;
    return(
        <div className="restroCard w-[200px] m-4 bg-gray-300 p-4 rounded-md">
            <img className="w-[200px] h-24 rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <p className="break-words">{cuisines.join(",")}</p>
            <h4>{avgRating} Star</h4>
            <h4>{restroData.info.sla.deliveryTime} mnt</h4>
            <div>{user}</div>
        </div>
    )
}
export default RestroCard;