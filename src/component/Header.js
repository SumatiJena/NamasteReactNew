import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useContext } from "react";
import Usercontext from "../../utils/Usercontext";


const Header=()=>{
    const [logintext,setLogintext]=useState("Login");
   const onlineStatus=useOnlineStatus();
   const {user}=useContext(Usercontext);
    return(
        <div className="heading flex justify-between bg-green-100 shadow-lg">
            <div className="logo">
                 <img className="w-32 h-24" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=740"/>
              </div>
              <div className="flex items-center">
                <ul className="flex mr-8">
                    <li className="px-4"><Link to="/">{onlineStatus==true?"Online":"Offline"}</Link></li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><button onClick={()=>logintext=="Login"?setLogintext("Logout"):setLogintext("Login")}>{logintext}</button></li>
                    <li className="px-4">{user}</li>
                </ul>
            </div> 
        </div>
    )
}
export default Header;