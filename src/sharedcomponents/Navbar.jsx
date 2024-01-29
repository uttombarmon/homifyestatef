
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/provider/AuthProvider";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "PROPETTIES", link: "/properties" },
    { name: "BLOG", link: "/blog" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  const { user, signout } = useContext(AuthContext)
  const navigate = useNavigate();

  const onSignout = () => {
    signout()
      .then(() => {
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div>
        <div className="shadow-md text-sm lg:text-base w-full">
          <div className="md:flex items-center justify-between bg-[#fac23ec5] py-2 md:px-6  px-10">
            <div className="font-bold text-xl md:text-2xl cursor-pointer flex  items-center">
            <img src="../../public/homify-logo.png" alt="" className=" xl:w-[15%] lg:w-[24%] w-[15%]  md:w-[9%]  " />
              <h1 className=" text-black uppercase  xl:text-3xl lg:text-2xl md:text-xl text-sm  "> HomifyState </h1>
             
             
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 md:top-6 top-5 cursor-pointer lg:hidden w-7 h-7"
            >
              {open ? <FaTimes /> : <FaBars />}
            </div>
            <ul
              className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:bg-transparent bg-white lg:z-auto z-50 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"
                }`}
            >
              {Links?.map((link) => (
                <li key={link.name} className="md:ml-8 md:my-6 my-7 font-medium text-normal">
                  <a
                    href={link.link}
                    className="text-gray-800  hover:text-red-500 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {
                user &&
                <NavLink className="md:ml-8 md:my-0 my-7 font-medium text-normal text-gray-800  hover:text-red-500 duration-500" to={"/dashboard"}>Dashboard</NavLink>
              }

              {/* SignUp  button   */}
              {
                !user ?
                  <Link to={"/signin"}>
                    <button className="btn bg-orange-500  btn-outline border-none text-white md:ml-8 font-semibold rounded duration-500 md:static">SignIn</button>
                  </Link> :
                  // <button onClick={onSignout} className="md:btn md:mx-3">SignOut</button>
                  <div className="dropdown dropdown-end ml-4">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 bg-slate-400 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                      </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      <li> <button onClick={onSignout} className="md:btn md:mx-3">SignOut</button></li>
                    </ul>
                  </div>
              }

            </ul>
          </div>
        </div>

      </div>

    </>
  );
};

export default Navbar;