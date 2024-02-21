import { NavLink } from "react-router-dom";
import "./app.css"
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuTableProperties } from "react-icons/lu";
import { HiOutlineClipboardCheck } from "react-icons/hi";

//agent sidebar
const Agent = () => {
    return (
        <div className="ml-4 mt-10 flex flex-col gap-6 text-lg  ">
            <NavLink  to="/dashboard/agentDashboard" className='flex gap-2 items-center'> <FaHome/>Dashboard</NavLink> 
            <NavLink  to="/dashboard/agentProfile" className='flex gap-2 items-center'> <CgProfile />Profile</NavLink>
            <NavLink to="/dashboard/agentProperties" className='flex gap-2 items-center'> <LuTableProperties /> Properties</NavLink>
            <NavLink to="/dashboard/agentOrder" className='flex gap-2 items-center'> <HiOutlineClipboardCheck />Order</NavLink>
        </div>
        
    );
    
};


export default Agent;