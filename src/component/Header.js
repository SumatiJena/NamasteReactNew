import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header=()=>{
    const [logintext,setLogintext]=useState("Login")
   const onlineStatus=useOnlineStatus()
    return(
        <div className="heading">
            <div className="logo">
                 <img src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=740"/>
              </div>
              <div className="nav-list">
                <ul>
                    <li><Link to="/">{onlineStatus==true?"Online":"Offline"}</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><button onClick={()=>logintext=="Login"?setLogintext("Logout"):setLogintext("Login")}>{logintext}</button></li>
                </ul>
            </div> 
        </div>
    )
}
export default Header;