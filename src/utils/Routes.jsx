import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import SignIn from "../pages/signin/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      
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
