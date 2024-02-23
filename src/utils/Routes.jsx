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
        path: "/blog/:id",
        element: <Blog></Blog>,
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
        element: <PropertyDetails></PropertyDetails>,
      },
      {
        path: "sell",
        element: <Sell></Sell>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }, {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/rent",
        element: <Rent></Rent>,
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
        path: "/Privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/payment/success/:transId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/payment/fail/:transId",
        element: <PaymentFailed></PaymentFailed>,
      },
      {
        path: "/agentProfile",
        element: <AgentProfile></AgentProfile>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "agentDashboard",
        element: <AgentDashboard></AgentDashboard>,
      },
      {
        path: "agentProfile",
        element: <AgentProfile></AgentProfile>,
      }, {
        path: "updateOrder/:id",
        element: <UpdateProperty></UpdateProperty>
      },
      {
        path: "agentOrder",
        element: <AgentOderList></AgentOderList>,
      },
      {
        path: "agentProperties",
        element: <AgentProperties></AgentProperties>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "makeOffer/:id",
        element: <MakeOffer></MakeOffer>
      },
      {
        path: "allproperties",
        element: <AllProperties></AllProperties>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "managereviews",
        element: <ManageReviews></ManageReviews>,
      },
      {
        path: "alltransiction",
        element: <Transections></Transections>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "addProperty",
        element: <AddProperty />,
      },
    ],
  },
]);
