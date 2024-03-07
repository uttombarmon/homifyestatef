import { Outlet } from "react-router-dom";
import Footer from "../../sharedcomponents/Footer";
import Navbar from "../../sharedcomponents/Navbar";
import { Toaster } from "react-hot-toast";



const LayOut = () => {
    return (
        <div className=" relative w-full lg:max-w-[1024px] bg-slate-50 overflow-x-hidden xl:max-w-[1440px] mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default LayOut;