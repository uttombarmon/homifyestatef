import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";

import SignIn from "../pages/signin/SignIn";

import LayOut from "../components/mainLayout/LayOut";
import Home from "../pages/Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path:"",
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <SignIn></SignIn>
      }
    ]

  },

]);
