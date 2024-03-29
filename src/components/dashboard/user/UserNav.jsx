import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { AiOutlineOrderedList } from "react-icons/ai";

const UserNav = () => {
  return (
    <div className=" w-full h-fit">
      <ul className=" menu mt-0 top-0 p-0 font-semibold text-lg w-full">
        <li className="w-full pt-2">
          <Link to={"/dashboard/profile"} className="bg-transparent">
            <BsPersonCircle></BsPersonCircle>
            Profile
          </Link>
        </li>
        <li className="w-full pt-2">
          <Link to={"/dashboard/wishlist"}>
            <CiViewList></CiViewList>
            Wishlist
          </Link>
        </li>
        <li className="w-full pt-2">
          <Link to={"/dashboard/order"}>
            <AiOutlineOrderedList></AiOutlineOrderedList>
            Order
          </Link>
        </li>
        <li className="w-full pt-2">
          <Link to={"/dashboard/payment"}>
            <AiOutlineOrderedList></AiOutlineOrderedList>
            Payment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
