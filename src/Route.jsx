import {createBrowserRouter} from "react-router";
import Header from "./Components/Header";
import HomeLayout from "./Layouts/HomeLayout";
import Home from "./Pages/Home";
import CategoryNews from "./Pages/CategoryNews";
import CategoryContent from "./Components/homelayout/CategoryContent";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
          path:'',
          element:<Home></Home>
        },
        {
          path:'/category/:id',
          element:<CategoryContent></CategoryContent>,
          loader:()=>fetch('/news.json')
        },

      ]
    },
    {
      path: "/auth",
      element: <h1>Authentication</h1>
    },
    {
      path: "/news",
      element: <h1>News</h1>
    },
    {
      path: "/*",
      element: <h1>Error-404 </h1>
    },
  ]); 
  export default router