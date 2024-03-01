
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/provider/AuthProvider";
// import useAxiosPublic from "../hooks/axiosPublic/useAxiosPublic";
import useAxiosPrivate from "../hooks/axiosPrivate/useAxiosPrivate";

const Navbar = () => {

  const { user, userInfo, signout } = useContext(AuthContext)
  const navigate = useNavigate();
  const [dynamic, setDynamic] = useState('')
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    if (userInfo) {
      if (userInfo?.role == 'user') {
        setDynamic("profile")
      } else if (userInfo?.role == 'admin') {
        setDynamic('')
      } else {
        setDynamic("agentDashboard")
      }
    }
  }, [userInfo])
  const onSignout = () => {
    signout()
      .then(() => {
        if (user?.email) {
          axiosPrivate.post('/jwt/clear-token', { email: user?.email })
            .then(res => {
              if (res.data.success) {
                navigate('/signin')
              }
            })
        }
      })
      .catch(err => console.log(err))
  }
  const navlink = <>
    <li><NavLink to={''}>Home</NavLink></li>
    <li><NavLink to={'rent'}>Rent</NavLink></li>
    <li><NavLink to={'sell'}>Sale</NavLink></li>
    <li><NavLink to={'contact'}>contact</NavLink></li>
    <li><NavLink to={'about'}>About</NavLink></li>
    
    {
      user &&
      <li><Link to={`/dashboard/${dynamic}`}>Dashboard</Link></li>
    }
  </>
  return (
    <>
      <div className="navbar w-full bg-[#2119198d]  xl:max-w-[1440px] lg:max-w-[1024px] text-amber-300 fixed z-[200]">
        <div className="navbar-start">
          <a className="btn btn-ghost font-bold font-serif text-2xl">HomifyEstate</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal py-1 ">
            {
              navlink
            }
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-[#ccd19b] text-black rounded-box w-52">
              {
                navlink
              }
              <li className=" justify-center  font-bold">        {
                user ?
                  <button className="btn" onClick={onSignout}>SignOut</button>
                  :
                  <a className="btn  border-none lg:flex bg-amber-300 py-3 mt-3  font-bold">Sign In</a>
              }</li>
            </ul>
          </div>
          {
            user ?
              <button className="btn" onClick={onSignout}>SignOut</button>
              :
              <Link to={'/signin'} className="btn hidden border-none lg:flex bg-amber-300  font-bold">Sign In</Link>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;