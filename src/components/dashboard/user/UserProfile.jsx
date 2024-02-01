import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { BsArrowUpCircle } from "react-icons/bs";
const UserProfile = () => {
  const [properties, setProperties] = useState([]);
  console.log(properties);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../../public/userprofile.json");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
   
        <div className="w-full bg-gray-200 p-0 m-0  mx-auto px-8">
      <h1 className=" text-2xl mb-10  flex justify-center font-bold">
        Personalized Information
      </h1>

      {properties?.map((properties) => (
        <div
          key={properties.id}
          className="lg:flex mt-4  bg-slate-300  py-4 xl:flex md:flex  flex-row cursor-pointer gap-10  mb-5  relative justify-start"
        >
          <div className=" ml-3">
            <img
              src={properties.image}
              alt=""
              className=" xl:w-[285px]  lg:w-[300px] md:w-[330px] w-[360px]"
            />
          </div>
          <div className=" px-5">
            <h1 className="xl:text-3xl text-2xl font-bold mt-1 ">
              {properties.name}
            </h1>
            <p className="text-[17px] flex gap-20  mt-4 ">
              <span className="font-semibold tex-[22px] mr-3 "> Email :</span>
              {properties.email}
            </p>
            <p className="text-[17px]  flex gap-20  mt-4 justify-start ">
              <span className="font-semibold tex-[22px] mr-2  ">Phone:</span>
              {properties.phone}
            </p>
            <p className="text-[17px] flex gap-20  mt-4 justify-start ">
              <span className="font-semibold tex-[22px] mr-7 ">   City  :  </span>
              {properties.city }
            </p>
            <p className="text-[17px] flex gap-20  mt-4 justify-start ">
              <span className="font-semibold tex-[22px] "> Country:</span>
              {properties.country}
            </p>
            <p className="text-[17px] flex gap-20  mt-4 justify-start ">
              <span className="font-semibold tex-[22px] "> Address:</span>
              {properties.address}
            </p>
            {/* Icone link */}
            <div className="flex gap-5 md:flex-row mt-4">
              <button className="mt-4 mb-3 bg-yellow-300  hover:bg-yellow-500 p-1 py-2 px-2 ">
                <FaFacebook></FaFacebook>
              </button>
              <button className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 px-2 ">
                <FaLinkedinIn></FaLinkedinIn>
              </button>
              <button className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 px-2 ">
                <FaTwitter></FaTwitter>
              </button>
              <button className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 px-2 ">
                <FaInstagramSquare></FaInstagramSquare>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* frome start */}

      <div className=" w-full xl:mt-14 xl:w-[1000px]  lg:w-[670px] md:w-[690px] sm:w-[367px]   px-1 ">
        {/* <h1 className="  font-bold"> Leave a Comment  </h1> */}

        <div className=" border px-4 py-3  bg-slate-300 ">
            <h1 className="text-2xl font-semibold"> Update Information </h1>
          <div className="mt-4 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2  grid text-center items-center justify-center gap-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Website</span>
              </label>
              <input
                type="text"
                placeholder="Website"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="number"
                placeholder="Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                placeholder="Photo"
                className="input items-center py-2 input-bordered"
                required
                
              />
            </div>
          </div>          
          <button className=" mt-4 font-semibold px-2 hover:bg-yellow-500 bg-yellow-400 w-[160px] h-12 mb-6 "> Update Information </button>
        </div>


        <div className=" mt-9 border bg-slate-300 py-2 px-5 mb-7 ">
            <h1 className="text-2xl font-semibold mb-3"> Update password</h1>
        <div className="grid lg:grid-cols-3 grid-cols-2  gap-2 ">
        <div className="form-control">
              <label className="label">
                <span className="label-text">Corrent password</span>
              </label>
              <input
                type="password"
                placeholder="Corrent password"
                className="input input-bordered"
                required
              />
            </div>
        <div className="form-control">
              <label className="label">
                <span className="label-text">New password</span>
              </label>
              <input
                type="password"
                placeholder="New password"
                className="input input-bordered"
                required
              />
            </div>
        <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                required
              />
            </div>
        </div>
<div className=" flex justify-between items-center">
<button className=" mt-4 font-semibold hover:bg-yellow-500 bg-yellow-400 w-[150px] h-12 mb-6 "> Update password </button>
       <p className="  text-3xl px-7 hover:text-orange-400 rounded-full "> <BsArrowUpCircle/> </p>
    </div> 
    
           </div>
      </div>
    </div>
  
  );
};

export default UserProfile;