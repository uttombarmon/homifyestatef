import { Link, Outlet } from 'react-router-dom';
import logo from './logo2.png';
import Agent from '../../components/dashboard/agent/Agent';

import { useContext } from 'react';
import { AuthContext } from '../../utils/provider/AuthProvider';
import AdminNav from '../../components/dashboard/admin/AdminNav';
import UserNav from '../../components/dashboard/user/UserNav';
import { Toaster } from 'react-hot-toast';

const DashboardLayout = () => {
    const { userInfo } = useContext(AuthContext)
    return (
        <>
            <div className=' overflow-x-hidden'>
                <div>
                    <Toaster />
                </div>
                <div className=" text-red-50 flex overflow-x-hidden flex-wrap">
                    {/* small devices nab bar  */}
                    <div className="navbar w-full lg:hidden z-20 bg-amber-200 ">
                        <div className="navbar-start">
                            <Link to={"/"} className="btn btn-ghost text-black text-xl">HomifyEstate</Link>
                        </div>
                        <div className="navbar-end">
                            <div className="dropdown">
                                <div className="drawer">
                                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        {/* Page content here */}
                                        <label htmlFor="my-drawer" className="btn bg-transparent drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                                    </div>
                                    <div className="drawer-side">
                                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <ul className="menu w-52 min-h-full bg-stone-700 text-white">
                                            {
                                                userInfo?.role == 'admin' &&
                                                <AdminNav></AdminNav>
                                            }
                                            {
                                                userInfo?.role == 'agent' &&
                                                <Agent></Agent>
                                            }
                                            {
                                                userInfo?.role == 'user' &&
                                                <UserNav></UserNav>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* dashboard nav section */}
                <div className=" hidden lg:flex fixed min-h-screen md:w-[250px]  bg-slate-200 text-black">
                    <div className='w-full flex-wrap mt-4 '>
                        {/* drawer head */}
                        <div className=" w-full hidden lg:inline bg-slate-400 text-center">
                            <img className=' w-20 h-10 mx-auto' src={logo} alt="" />
                            <h1 className=' w-full text-center mb-2'> <Link to={'/'} className="font-bold mb-6 mx-auto text-center text-xl">HomifyEstate</Link></h1>
                        </div>
                        <hr className=' bg-black border-b-[1px] border-zinc-950' />
                        <div>
                            <ul className="menu w-full min-h-full text-black">
                                {
                                    userInfo?.role == 'admin' &&
                                    <AdminNav></AdminNav>
                                }
                                {
                                    userInfo?.role == 'agent' &&
                                    <Agent></Agent>
                                }
                                {
                                    userInfo?.role == 'user' &&
                                    <UserNav></UserNav>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {/* dashboard content section  */}
                <div className=" top-16 lg:top-0 w-full md:w-[calc(100%-20px)] overflow-x-hidden absolute right-0 mx-auto lg:w-[calc(100%-250px)] text-black">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
};

export default DashboardLayout;