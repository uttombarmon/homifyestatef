import { Outlet } from "react-router-dom";
import Footer from "../../sharedcomponents/Footer";
import Navbar from "../../sharedcomponents/Navbar";
import { Toaster } from "react-hot-toast";



const LayOut = () => {
    return (
        <div className=" w-full lg:max-w-[1024px] bg-slate-50 overflow-x-hidden xl:max-w-[1440px] mx-auto font-poppins">
            <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default LayOut;