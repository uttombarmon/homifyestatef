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
import Wishlist from "../components/dashboard/user/Wishlist";
import UserProfile from "../components/dashboard/user/UserProfile";
import ManageUsers from "../components/dashboard/admin/manageusers/ManageUsers";
import AllProperties from "../components/dashboard/admin/allproperties/AllProperties";
import ManageReviews from "../components/dashboard/admin/managereviews/ManageReviews";
import PaymentSuccess from "../pages/paymentStatus/PaymentSuccess";
import PaymentFailed from "../pages/paymentStatus/PaymentFailed";
import AddProperty from "../components/dashboard/agent/AddProperty";
import Order from "../components/dashboard/user/Order";
import Dashboard from "../components/dashboard/Dashboard";
import Transections from "../components/dashboard/admin/transection/Transections";
import Sell from "../pages/sell/Sell";
import Rent from "../pages/rent/Rent";
import MakeOffer from "../components/dashboard/user/MakeOffer";
import Privacy from "../pages/privacy-Policy/Privacy";
import UpdateProperty from "../components/dashboard/agent/UpdateProperty";


import PaymentForm from "../components/dashboard/user/PaymentForm";

import Profilejs from ".././sharedcomponents/Profilejs"
import Allagent from "../sharedcomponents/Allagent";
import VerifiedFile from "../components/dashboard/user/VerifiedFile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRole from "./UserRoleRoutes/AdminRole";
import AgentRole from "./UserRoleRoutes/AgentRole";
import UserRole from "./UserRoleRoutes/UserRole";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/properties",
        element: <Properties></Properties>,
      },
      {
        path: "/allagent",
        element: <PrivateRoute><Allagent></Allagent></PrivateRoute>,
      },
      {
        path: "/blog/:id",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/properties/:id",
        element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
      },
      {
        path: "sell",
        element: <PrivateRoute><Sell></Sell></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/rent",
        element: <PrivateRoute><Rent></Rent></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/agentProfiles/:id",
        element: <PrivateRoute><Profilejs></Profilejs></PrivateRoute>,
      },
      {
        path: "/Privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/payment/success/:transId",
        element: <PrivateRoute><PaymentSuccess></PaymentSuccess></PrivateRoute>,
      },
      {
        path: "/payment/fail/:transId",
        element: <PrivateRoute><PaymentFailed></PaymentFailed></PrivateRoute>,
      },
      {
        path: "/agentProfile",
        element: <PrivateRoute><AgentProfile></AgentProfile></PrivateRoute>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // admin routes 
      {
        path: "",
        element: <PrivateRoute><AdminRole><Dashboard></Dashboard></AdminRole></PrivateRoute>,
      },
      {
        path: "allproperties",
        element: <PrivateRoute><AdminRole><AllProperties></AllProperties></AdminRole></PrivateRoute>,
      },
      {
        path: "manageusers",
        element: <PrivateRoute><AdminRole><ManageUsers></ManageUsers></AdminRole></PrivateRoute>,
      },
      {
        path: "managereviews",
        element: <PrivateRoute><AdminRole><ManageReviews></ManageReviews></AdminRole></PrivateRoute>,
      },
      {
        path: "alltransiction",
        element: <PrivateRoute><AdminRole><Transections></Transections></AdminRole></PrivateRoute>,
      },

      // agent routes 
      {
        path: "agentDashboard",
        element: <PrivateRoute><AgentRole><AgentDashboard></AgentDashboard></AgentRole></PrivateRoute>,
      },
      {
        path: "agentProfile",
        element: <PrivateRoute><AgentRole><AgentProfile></AgentProfile></AgentRole></PrivateRoute>,
      },
      {
        path: "updateOrder/:id",
        element: <PrivateRoute><AgentRole><UpdateProperty></UpdateProperty></AgentRole></PrivateRoute>,
      },
      {
        path: "agentOrder",
        element: <PrivateRoute><AgentRole><AgentOderList></AgentOderList></AgentRole></PrivateRoute>,
      },
      {
        path: "agentProperties",
        element: <PrivateRoute><AgentRole><AgentProperties></AgentProperties></AgentRole></PrivateRoute>,
      },
      {
        path: "addProperty",
        element: <PrivateRoute><AgentRole><AddProperty/></AgentRole></PrivateRoute>,
      },

      // user routes 
      {
        path: "profile",
        element: <PrivateRoute><UserRole><UserProfile></UserProfile></UserRole></PrivateRoute>,
      },
      {
        path: "wishlist",
        element: <PrivateRoute><UserRole><Wishlist></Wishlist></UserRole></PrivateRoute>,
      },
      {
        path: "makeOffer/:id",
        element: <PrivateRoute><UserRole><MakeOffer></MakeOffer></UserRole></PrivateRoute>,
      },
      {
        path: "order",
        element: <PrivateRoute><UserRole><Order></Order></UserRole></PrivateRoute>,
      },
      {
        path: "payment/:id",
        element: <PaymentForm></PaymentForm>,
      },
      {
        path: "download",
        element: <VerifiedFile></VerifiedFile>
      }
    ],
  },
]);
