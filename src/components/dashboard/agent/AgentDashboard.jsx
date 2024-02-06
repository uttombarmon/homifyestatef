import { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { GoCodeReview } from "react-icons/go";
import DashboardTabil from './DashboardTabil';

const AgentDashboard = () => {
        //wishlist fetching     
    const [properties, setProperties] = useState([]);
    // console.log(properties);
    const [listing, setListing] = useState([]);
    console.log(listing);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/wishlist.json");
          const data = await response.json();
          setProperties(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

   
// total listiong


useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/order.json");
        const data = await response.json();
        setListing(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



   









    const data = [
        {
            name: 'Page A',
            uv: 4000,
            // pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            // pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            // pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            // pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            // pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            // pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            // pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div>
            <h2 className="text-center my-4 font-bold ">Agent Deshboard</h2>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    {/* <!-- Card Item Start --> */}
                    <div
                        className="rounded-lg  border border-stroke bg-gray-400 py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
                        <div className="flex justify-center rounded-full  ">                       
                            <p className='text-3xl text-blue-500 '>
                                <IoEyeSharp ></IoEyeSharp>
                            </p>
                        </div>
                        <div className="mt-4 flex items-end justify-center">
                            <div className=" flex items-center gap-3">
                            <span className="text-xl font-medium">Total Listing :</span>
                                <h4 className="text-xl font-bold text-black dark:text-white">
                                    { listing.length}
                                </h4>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card Item End -->
        
            <!-- Card Item Start --> */}
                    <div
                        className="rounded-lg border border-stroke bg-gray-400 py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex  items-center justify-center rounded-full ">
                            <p className='text-3xl text-blue-500'> <MdOutlineShoppingCart/> </p>
                        </div>

                        <div className="mt-4 flex text-center items-end justify-between">
                            <div className='flex gap-3 items-center'>
                            <span className="text-[20px] font-medium">Pending Proprty :</span>
                                <h4 className="text-xl font-bold text-black dark:text-white">
                                    45
                                </h4>
                              
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card Item End -->
        
            <!-- Card Item Start --> */}
                    <div
                        className="rounded-lg border border-stroke bg-gray-400 py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex  items-center justify-center rounded-full ">
                            <p className='text-2xl text-blue-500'> <FiShoppingBag/> </p>
                        </div>

                        <div className="mt-6 flex  items-end justify-center">
                            <div className='flex  gap-2'>
                            <span className="text-xl  font-medium">Wishlist: </span>

                                <h4 className="text-xl ml-2 font-bold text-black dark:text-white">
                                    {properties.length}
                                </h4>
                            </div>
                        </div>

                    </div>
                    {/* <!-- Card Item End -->
        
            <!-- Card Item Start --> */}
                    <div
                        className="rounded-lg border border-stroke bg-gray-400 py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                         <div className="flex  items-center justify-center rounded-full ">
                            <p className='text-3xl text-blue-500'> <GoCodeReview/> </p>
                        </div>

                        <div className="mt-4 flex items-end justify-center">
                            <div className='flex gap-3 items-center'>
                            <span className="text-xl font-medium">Review</span>
                                <h4 className="text-xl font-bold text-black dark:text-white">
                                    3.456
                                </h4>
                               
                            </div>
                        </div>
                    </div>


                    {/* <!-- Card Item End --> */}
                </div>




                <div className=' xl:flex flex-row xl:space-y-0 space-y-9 gap-9  items-center mt-9 mb-6 '>
                   
                <div className="gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

<BarChart
    width={500}
    height={300}
    data={data}
    margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
    }}
>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
</BarChart>

{/* <!-- ====== Chat Card End --> */}
</div>


{/* summery sectiton  */}

<div className=" rounded-xl xl:w-[500px] border bg-white p-6   text-gray-900">
<p className="text-lg font-medium">Summary</p>
<div className="mt-4">
    <p className="float-left mb-2">Income</p>
    <span className="float-right mb-2">20,00</span>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
        <div className="h-full w-10/12 overflow-hidden rounded-full bg-indigo-600"></div>
    </div>
</div>
<div className="mt-4">
    <p className="float-left mb-2">Profit</p>
    <span className="float-right mb-2">2,000</span>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
        <div className="h-full w-4/12 overflow-hidden rounded-full bg-indigo-600"></div>
    </div>
</div>
<div className="mt-4">
    <p className="float-left mb-2">Expenses</p>
    <span className="float-right mb-2">1,500</span>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
        <div className="h-full w-3/12 overflow-hidden rounded-full bg-indigo-600"></div>
    </div>
</div>
<div className="mt-4">
    <p className="float-left mb-2"></p>
    <span className="float-right mb-2">260</span>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
        <div className="h-full w-1/12 overflow-hidden rounded-full bg-indigo-600"></div>
    </div>
</div>
</div>
                </div>

              

              {/* dashbord tabile start */}
                <div>
                    <DashboardTabil></DashboardTabil>
                </div>
                
            </div>
        </div>
    );
};

export default AgentDashboard;