import { Outlet } from 'react-router-dom';
import logo from './logo2.png';
const DashboardLayout = () => {
    return (
        <div className=" text-red-50 flex overflow-x-hidden flex-wrap">
            {/* small devices nab bar  */}
            <div className="navbar w-full lg:hidden bg-green-500">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
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
            <div className=" hidden lg:flex md:w-[200px] lg:w-[300px] bg-stone-700">
                <div className='w-full flex-wrap'>
                    {/* drawer head */}
                    <div className=" w-full mt-6 hidden lg:inline text-center">
                        <img className=' w-24 h-14 mx-auto' src={logo} alt="" />
                        <h1 className="font-bold mb-6 text-xl">HomifyEstate</h1>
                        <hr />
                    </div>
                    <div className=' w-full h-fit'>
                        <ul className=" menu mt-0 top-0 p-0 w-full">
                            <li className='w-full'>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Wishlist
                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    Item 3
                                </a>
                            </li>
                        </ul>
                    </div>
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