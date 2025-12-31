import { createBrowserRouter } from "react-router";


import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Proider/PrivateRoute";



const router = createBrowserRouter([
      {
       path:"/",
       element: <HomeLayout></HomeLayout>,
       children:[
            {
                  path:'/',
                  element:<Home></Home>
            },
            {
                  path:'/category/:id',
                  element:<CategoryNews></CategoryNews>,
                  loader:()=>fetch("/public/news.json"),
            }
       ]
      },
       {
       path:"/auth",
       element:  <AuthLayout></AuthLayout>,
       children:[
            {
                  path:"/auth/login",
                  element:<Login></Login>
            },
            {
                  path:"/auth/register",
                  element:<Register></Register>
            }

       ]
      },
       {
       path:"/news-details/:id",
       element: <PrivateRoute>
            <NewsDetails></NewsDetails>
       </PrivateRoute>,
       loader:()=>fetch("/public/news.json")
      },
       {
       path:"/*",
       element: <h2>Error 404! Not Found any Page</h2>
      }
])

export default router