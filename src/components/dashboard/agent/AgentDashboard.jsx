import { useContext, useEffect, useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { GoCodeReview } from "react-icons/go";
import { AuthContext } from './../../../utils/provider/AuthProvider';
import useAxiosPrivate from './../../../hooks/axiosPrivate/useAxiosPrivate';


const AgentDashboard = () => {
   const {user}=useContext(AuthContext);
   const email = user?.email;
//    console.log(email);

    const [wishLists, setwishLists] = useState([]);
    // console.log(wishLists);
    const axiosPrivate = useAxiosPrivate();
    
  
    const [listing, setListing] = useState([]);
    const [reviewListing, setreviewListing] = useState(null);
    // console.log(reviewListing);

    // total listing
    useEffect(() => {
        if(email){
            axiosPrivate.get(`/home/checkout/${email}`)
            .then( async data =>{
                setListing(data.data);
                // console.log(data.data);
                try {
                    const response = await axiosPrivate.get(`/wish-lists/wish/property`);
                    const data = response.data;
                   
                    const filteredProperties = data.filter(
                      (property) => property.author === email
                    );
                    setwishLists(filteredProperties);
                    const reviews = await axiosPrivate.get(`/agent/reviews?id=${email}`)
                    setreviewListing(reviews.data.dataLength);

                  } catch (error) {
                    console.error(error);
                  }
            })
            .catch(error => console.log(error));
           }
    }, [axiosPrivate,email]);

//    //wish-lists

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axiosPrivate.get(`/wish-lists/wish/property`);
//           const data = response.data;
         
//           const filteredProperties = data.filter(
//             (property) => property.author === email
//           );
//           setwishLists(filteredProperties);
//         } catch (error) {
//           console.error(error);
//         }
//       };
    
//       fetchData();
//     }, [axiosPrivate, email]);



//     // Review listing
//     useEffect(() => {
        
//             axiosPrivate.get(`/agent/reviews/${email}`)
           
//             .then(data =>{
//                 setreviewListing(data.data);
//                 console.log(data.data);
//             })
           
//     }, [axiosPrivate,email]);


    

    return (
        <div >
            <h2 className="text-center  font-bold text-3xl uppercase  p-3">Agent Deshboard</h2>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
                    {/* <!-- Card Item Start --> */}
                    <div
                        className="rounded-lg  border border-stroke bg-[#22c1c3] py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
                        <div className="flex justify-center rounded-full  ">
                            <p className='text-3xl text-blue-500 '>
                                <IoEyeSharp ></IoEyeSharp>
                            </p>
                        </div>
                        <div className="mt-4 flex items-end justify-center ">
                            <div className=" flex items-center gap-3">
                                <span className="text-xl font-medium">Total Listing :</span>
                                <h4 className="text-xl font-bold text-black dark:text-white">
                                    {listing.length}
                                </h4>
                            </div>
                        </div>
                    </div>
    
        
            {/* <!-- Card Item Start -->  */}
                    <div
                        className="rounded-lg border border-stroke bg-[#4bd6a8] py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex  items-center justify-center rounded-full ">
                            <p className='text-2xl text-blue-500'> <FiShoppingBag /> </p>
                        </div>

                        <div className="mt-6 flex  items-end justify-center">
                            <div className='flex  gap-2'>
                                <span className="text-xl  font-medium">Wishlist: </span>

                                <h4 className="text-xl ml-2 font-bold text-black dark:text-white">
                                    {wishLists.length}
                                </h4>
                            </div>
                        </div>

                    </div>
                    {/* <!-- Card Item End -->
        
            <!-- Card Item Start --> */}
                    <div
                        className="rounded-lg border border-stroke bg-[#b471eb] py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex  items-center justify-center rounded-full ">
                            <p className='text-3xl text-blue-500'> <GoCodeReview /> </p>
                        </div>

                        <div className="mt-4 flex items-end justify-center">
                            <div className='flex gap-3 items-center'>
                                <span className="text-xl font-medium">Review :</span>
                                <h4 className="text-xl font-bold text-black dark:text-white">
                                   {reviewListing}
                                </h4>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Card Item End --> */}
                </div>

                

            </div>
        </div>
    );
};

export default AgentDashboard;