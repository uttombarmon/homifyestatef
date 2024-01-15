import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      
    },
    {
        path:'/signup',
        element:<Signup></Signup>
    }

  ]);
