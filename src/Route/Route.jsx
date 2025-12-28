import { createBrowserRouter } from "react-router";


import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
      {
       path:"/",
       element: <HomeLayout></HomeLayout>
      },
       {
       path:"/auth",
       element:  <h2>This is Auth</h2>
      },
       {
       path:"/news",
       element: <h2>News Layout</h2>
      },
       {
       path:"/*",
       element: <h2>Error 404! Not Found any Page</h2>
      }
])

export default router