import {createBrowserRouter} from "react-router";
import Header from "./Components/Header";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header></Header>
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