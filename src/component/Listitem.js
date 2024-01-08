const Listitem=({list})=>{
    return(
        <>
        {list.map((item)=>{
            return <div className="flex justify-between border-b-2 border-gray-400 py-4 my-4" key={item.card.info.id}>
                <div className="text-left">
                    <h1>{item.card.info.name}</h1>
                    <h1>{item.card.info.price/100}</h1>
                    <p>{item.card.info.description}</p>
                </div>
                <div >
                <img className="w-32 h-28"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId
                }/> 
                <button className="text-center border border-solid bg-white w-16 px-4 rounded-lg py-1 relative bottom-10 left-0">Add+</button>
                </div>
            </div>
        })}
        </>
    )
}
export default Listitem;