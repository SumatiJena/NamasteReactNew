import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./component/Header";
import Body from "./component/Body";
import Restromenu from "./component/Restromenu";
import About from "./component/About";
import Contact from "./component/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const AppLoayout=()=>{
    return( 
        <div id="container">
            <Heading/>
            <Outlet/>
        </div>
    )
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLoayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
            path:"/about",
            element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
                },
            {
                path:"/restaurant/:resId",
                element:<Restromenu/>
            }

        ]
    },
    
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
