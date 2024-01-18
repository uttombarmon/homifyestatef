import { Outlet } from "react-router-dom";
import Footer from "../../sharedcomponents/Footer";
import Navbar from "../../sharedcomponents/Navbar";



const LayOut = () => {
    return (
        <div className=" w-full lg:max-w-[1024px] overflow-x-hidden xl:max-w-[1440px] mx-auto font-poppins">
            <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;