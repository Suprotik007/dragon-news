import {createBrowserRouter} from "react-router";
import Header from "./Components/Header";
import HomeLayout from "./Layouts/HomeLayout";
import Home from "./Pages/Home";
import CategoryNews from "./Pages/CategoryNews";
import CategoryContent from "./Components/homelayout/CategoryContent";
import Login from "./Pages/Login";
import Register from "./Register";
import AuthLayout from "./Layouts/AuthLayout";
import NewsDtl from "./Pages/NewsDtl";
import PrivateRoute from "./Provider/PrivateRoute";
  
  
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
      element: <AuthLayout></AuthLayout>,
      children:[
        {
path:'/auth/login',
element:<Login></Login>

      },
        {
path:'/auth/reg',
element:<Register></Register>

      },
    ]
    },
    {
      path: "/news",
      element: <h1>News</h1>
    },
    {
      path: "/*",
      element: <h1>Error-404 </h1>
    },
    {
      path:'/news-details/:id',
      element:(<PrivateRoute>
        <NewsDtl></NewsDtl>
      </PrivateRoute>),
      loader:()=>fetch('/news.json')
    }
  ]); 
  export default router