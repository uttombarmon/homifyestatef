import { NavLink } from "react-router-dom";
import { CiViewList } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const AdminNav = () => {
    return (
        <div className=' w-full h-fit'>
            <ul className=" menu mt-0 top-0 p-0 font-semibold text-lg w-full">
                <li className='w-full pt-2'>
                    <NavLink className=" px-0" to={"/dashboard/adminprofile"}>
                        <CgProfile></CgProfile>
                        Profile
                    </NavLink>
                </li>
                <li className='w-full pt-2'>
                    <NavLink className=" px-0" to={"/dashboard/allproperties"}>
                        <CiViewList></CiViewList>
                        Manage Properties
                    </NavLink>
                </li>
                <li className='w-full pt-2'>
                    <NavLink className=" px-0" to={"/dashboard/manageusers"}>
                        <FaUsersCog></FaUsersCog>
                        Manage Users
                    </NavLink>
                </li>
                <li className='w-full pt-2'>
                    <NavLink className=" px-0" to={"/dashboard/managereviews"}>
                        <MdOutlineRateReview></MdOutlineRateReview>
                        Manage Reviews
                    </NavLink>
                </li>
                <li className='w-full border-[1px] border- pt-2'>
                    <NavLink className=" px-0" to={"/dashboard/alltransiction"}>
                        <GrTransaction></GrTransaction>
                        Transaction History
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AdminNav;