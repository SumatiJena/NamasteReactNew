import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./component/Header";
import Body from "./component/Body";
import Restromenu from "./component/Restromenu";
import About from "./component/About";
import Contact from "./component/Contact";
import {useState } from "react";
import Usercontext from "../utils/Usercontext";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const AppLoayout=()=>{
    const [userName, setUserName]=useState();
    useEffect(()=>{
      const data={
            user:"sumati Jena",
        }
        setUserName(data.user);
    },[]);
    return( 
        <div id="container">
            <Usercontext.Provider value={{user:userName, setUserName}}>
            <Heading/>
            <Outlet/>
            </Usercontext.Provider>
        </div>
    )
};
const Grocery=lazy(()=>import("./component/Grocery"));
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
            },
            {
                path:"/grocery",
                element:<Suspense><Grocery/></Suspense>
            }

        ]
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
