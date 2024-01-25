import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";

import SignIn from "../pages/signin/SignIn";

import LayOut from "../components/mainLayout/LayOut";
import Home from "../pages/Home/Home";
import PropertyDetails from "../pages/properties-details/PropertyDetails";
import Properties from "../pages/properties/Properties";
import Private from "./privetRoute/Privet";
import ErrorPage from "../components/errorPage/ErrorPage";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"",
        element: <Home></Home>
      },
      {
        path:"/properties",
        element: <Private><Properties></Properties></Private>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path:"properties/:id",
        element: <PropertyDetails></PropertyDetails>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]

  },

]);
