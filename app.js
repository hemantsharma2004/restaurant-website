import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/component/header";
import Body from "./src/component/body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./src/component/about";
import Contact from "./src/component/contact";
import Error from "./src/component/error";
import RestaurantMenu from "./src/component/restaurantMenu";



 const APP=() =>{
     return(
          <div className="app">
                 <Header />
                <Outlet />;
          </div>
     )
 }

  const approuter=createBrowserRouter([
     {
         path:"/",
         element:<APP />,
         children:[
            {
                path:"/",
                element: <Body />
             },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurants/:Id",
                element:<RestaurantMenu />
            },
         ],
         errorElement:<Error />
     },
    
  ])


 const root=ReactDOM.createRoot(document.getElementById("container"));


 root.render(<RouterProvider  router={approuter} />);