import { Outlet } from 'react-router-dom';
import logo from './logo2.png';
import Agent from '../../components/dashboard/agent/Agent';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../utils/provider/AuthProvider';
import useAxiosPublic from '../../hooks/axiosPublic/useAxiosPublic';
import UserNav from '../../components/dashboardcomponents/UserNav';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [users, setUser] = useState(null)
    const axiosPublic = useAxiosPublic()
    //get user data from server
    useEffect(() => {
        const email = user?.email;
        console.log(email);
        if (email !== null && email !== undefined) {
            axiosPublic.get(`/users/${email}`)
                .then(res => {
                    const userInfo = res.data
                    console.log(userInfo);
                    setUser(userInfo);
                })
        }

    },[axiosPublic,user]);
    return (
        <div className=" text-red-50 flex overflow-x-hidden flex-wrap">
            {/* small devices nab bar  */}
            <div className="navbar w-full lg:hidden bg-amber-300">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">HomifyEstate</a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-52 min-h-full bg-base-200 text-base-content">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* dashboard nav section */}
            <div className=" hidden lg:flex md:w-[200px] lg:w-[300px]  bg-stone-700">
                <div className='w-full flex-wrap '>
                    {/* drawer head */}
                    <div className=" w-full mt-6 hidden lg:inline text-center">
                        <img className=' w-24 h-14 mx-auto' src={logo} alt="" />
                        <h1 className="font-bold mb-6 text-xl">HomifyEstate</h1>
                        <hr />
                    </div>
                    <Agent></Agent>
                    {
                        users?.role == 'user' &&
                        <UserNav></UserNav>
                    }
                </div>
            </div>
            {/* dashboard content section  */}
            <div className=" w-full md:w-[calc(100%-20px)] mx-auto lg:w-[calc(100%-300px)] bg-gray-100 text-black h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;