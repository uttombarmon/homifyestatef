import { Link } from "react-router-dom";
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
                    <Link to={"/dashboard/profile"}>
                        <CgProfile></CgProfile>
                        Profile
                    </Link>
                </li>
                <li className='w-full pt-2'>
                    <Link to={"/dashboard/allproperties"}>
                        <CiViewList></CiViewList>
                        Manage Properties
                    </Link>
                </li>
                <li className='w-full pt-2'>
                    <Link to={"/dashboard/manageusers"}>
                        <FaUsersCog></FaUsersCog>
                        Manage Users
                    </Link>
                </li>
                <li className='w-full pt-2'>
                    <Link to={"/dashboard/managereviews"}>
                        <MdOutlineRateReview></MdOutlineRateReview>
                        Manage Reviews
                    </Link>
                </li>
                <li className='w-full pt-2'>
                    <Link to={"/dashboard/alltransiction"}>
                        <GrTransaction></GrTransaction>
                        Transaction History
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminNav;