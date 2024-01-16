import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";

import SignIn from "../pages/signin/SignIn";

import LayOut from "../components/mainLayout/LayOut";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<LayOut></LayOut>,
      children:[
        {
          path:'/signup',
          element:<Signup></Signup>
      }
      ]    
      
    },

    {
        path:'/signup',
        element:<Signup></Signup>
    },
    {
        path:'/signin',
        element:<SignIn></SignIn>
    }

   


  ]);
