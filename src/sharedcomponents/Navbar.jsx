
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/provider/AuthProvider";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext)

  return (
    <>
      <div>
        <div className="shadow-md  w-full  top-0 left-0">
          <div className="md:flex items-center justify-between bg-[#FAC23E] py-4 md:px-14 px-10">
            <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
              <span className=" text-black uppercase">Homify Estate</span>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
            >
              {open ? <FaTimes /> : <FaBars />}
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static lg:bg-transparent bg-[#80856f6c]    md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"
                }`}
            >
              {Links?.map((link) => (
                <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
                  <a
                    href={link.link}
                    className="text-gray-800  hover:text-red-500 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              {/* SignUp  button   */}
              {
                !user ?
                  <Link to={"/signup"}>
                    <button className="btn bg-orange-500  btn-outline border-none text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">SignUp</button>
                  </Link> :
                  <div className="avatar ml-4">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user.photoURL} />
                    </div>
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