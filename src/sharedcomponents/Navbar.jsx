
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../utils/provider/AuthProvider";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "PROPETTIES", link: "/properties" },
    { name: "BLOG DETLISE", link: "/blog" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const { user,signout } = useContext(AuthContext)
  const navigate = useNavigate();

  const onSignout=()=>{
    signout()
    .then(()=>{
      navigate("/signin")
    })
    .catch(err=>console.log(err))
  }

  return (
    <>
      <div>
        <div className="shadow-md text-sm lg:text-base w-full">
          <div className="md:flex items-center justify-between bg-[#fac23ec5] py-2 md:px-14 px-10">
            <div className="font-bold text-2xl md:text-xl cursor-pointer flex items-center">
              <span className=" text-black uppercase">Homify Estate</span>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-4 cursor-pointer md:hidden w-7 h-7"
            >
              {open ? <FaTimes /> : <FaBars />}
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"
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
                    <button className="btn bg-orange-500  btn-outline border-none text-white md:ml-8 font-semibold rounded duration-500 md:static">SignUp</button>
                  </Link> :
                  <button onClick={onSignout} className="btn mx-3">SignOut</button>
              }

            </ul>
          </div>
        </div>

      </div>

    </>
  );
};

export default Navbar;