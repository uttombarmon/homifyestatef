import { Link} from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { AiOutlineOrderedList } from "react-icons/ai";

const UserNav = () => {
    return (
        <div className=' w-full h-fit'>
            <ul className=" menu mt-0 top-0 p-0 font-semibold text-lg w-full">
                <li className='w-full pt-2'>
                    <Link to={"/dashboard/userprofile"} className="bg-transparent">
                        <BsPersonCircle></BsPersonCircle>
                        Profile
                    </Link>
                </li>
                <li className='w-full pt-2'>
                    <Link>
                    <CiViewList></CiViewList>
                        Wishlist
                    </Link>
                </li>
                <li className='w-full pt-2'>
                    <Link>
                    <AiOutlineOrderedList></AiOutlineOrderedList>
                    Order
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default UserNav;