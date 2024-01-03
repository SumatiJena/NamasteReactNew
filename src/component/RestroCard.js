
const RestroCard=(props)=>{
    const {restroData}=props;
   const {cloudinaryImageId,name,cussion,avgRating}=restroData?.info;
    return(
        <div className="restroCard">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cussion}</p>
            <h4>{avgRating} Star</h4>
            <h4>{restroData.info.sla.deliveryTime} mnt</h4>
        </div>
    )
}
export default RestroCard;