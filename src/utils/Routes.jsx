import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";

import SignIn from "../pages/signin/SignIn";

import LayOut from "../components/mainLayout/LayOut";
import Home from "../pages/Home/Home";
import PropertyDetails from "../pages/properties-details/PropertyDetails";
import Properties from "../pages/properties/Properties";
import ErrorPage from "../components/errorPage/ErrorPage";
import Blog from "../pages/blog/Blog";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Contact from "../pages/contact/Contact";
import AgentDashboard from "../components/dashboard/agent/AgentDashboard";
import AgentOderList from "../components/dashboard/agent/AgentOderList";
import AgentProperties from "../components/dashboard/agent/AgentProperties";
import About from "../pages/about/About";
import AgentProfile from "../pages/agentProfile/AgentProfile";
import PaymentSuccess from "../pages/paymentStatus/paymentSuccess";
import PaymentFailed from "../pages/paymentStatus/PaymentFailed";
import AddProperty from "../components/dashboard/agent/AddProperty";
import UserProfile from "../components/dashboard/user/UserProfile";
import Wishlist from "../components/dashboard/user/Wishlist";
import Order from "../components/dashboard/user/Order";




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
        element: <Properties></Properties>
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
      },{
        path:"/about",
        element:<About></About>
      },
      {
        path:"/payment/success/:transId",
        element:<PaymentSuccess></PaymentSuccess>
      },
      {
        path:"/payment/fail/:transId",
        element:<PaymentFailed></PaymentFailed>
      },
      {
        path:"/agentProfile",
        element:<AgentProfile></AgentProfile>
      }
    ]

  },
  {
    path:"dashboard",
    element:<DashboardLayout></DashboardLayout>,
    children: [
      {
        path:"",
        element:<div> Contents</div>
      },
      {
        path:"agentDashboard",
        element:<AgentDashboard></AgentDashboard>
      },
      {
        path:"agentProfile",
        element:<AgentProfile></AgentProfile>
      },
      {
        path:"agentOrder",
        element:<AgentOderList></AgentOderList>
      },
      {
        path:"agentProperties",
        element:<AgentProperties></AgentProperties>
      },
      {
        path:"userprofile",
        element: <UserProfile></UserProfile>
      },
      {
        path:"wishlist",
        element:<Wishlist></Wishlist>
      },
      {
          path:"order",
          element:<Order></Order>
      },
      {
          path:"addProperty",
          element:<AddProperty/>
      }
      
    ]
  }

]);
