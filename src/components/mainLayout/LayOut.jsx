import { Outlet } from "react-router-dom";
import Navbar from "../../sharedcomponents/Navbar";
// import Navbar from "../sharedPage/Navbar";


const LayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;