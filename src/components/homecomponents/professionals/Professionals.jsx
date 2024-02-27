// Professionals

import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Professionals = () => {
  const [personInfos, setPersonInfos] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get('/users/all/agent')
      .then(data => {
        const newData = data.data.slice(0,4);
        setPersonInfos(newData)
      })
  }, [axiosPublic]);

  return (
    <>
      <div>
        <h1 className=" items-center mt-5 mb-6 text-center font-black lg:text-4xl  text-xl ">
          Meet the Realty Professionals
        </h1>
        <div className="grid justify-center mx-auto md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-2">
          {
            personInfos?.map((personInfo) =>
              <div key={personInfo._id} className="card  mx-auto xl:w-[320px] w-[375px] lg:w-[450px] mt-7 bg-white border">
                <div className="group w-full   h-[300px] relative border-slate-500 overflow-hidden">
                  <img
                    src={personInfo.photoURL}
                    alt=""
                    className="w-full h-full object-cover rounded-t-md" />
                  <div className="absolute top-0 right-full rounded-t-md w-full h-full group-hover:right-0 bg-[#29404788] backdrop-blur-[5px]  p-7 flex flex-col justify-center ">
                    <div className=" items-center flex text-xl text-white text-center gap-5">
                      <button className=" ml-[15%] rounded-full  hover:bg-orange-600 bg-orange-400 p-2 ">
                        <Link to='https://twitter.com'><FaTwitter></FaTwitter></Link>
                      </button>

                      <button className="rounded-full bg-gray-300 p-2  hover:bg-gray-500 text-red-500 ">
                        <Link to='https://facebook.com'><FaFacebook></FaFacebook></Link>
                      </button>
                      <button className=" rounded-full hover:bg-orange-600 bg-orange-400 p-2 ">
                        <Link to='https://linkedin.com'><FaLinkedinIn></FaLinkedinIn></Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" mt-4 px-6 ">
                  <Link to={`/agentProfiles/${personInfo?._id}`}><h2 className=" font-bold text-xl ">
                    {personInfo?.name}
                    <div className="badge badge-secondary ml-3 ">{personInfo?.personalInfo?.listing} listing</div>
                  </h2></Link>
                  <p className="font-medium">{personInfo?.role}</p>
                  <hr className=" bg-black mt-3 " />
                  <div className=" justify-start mt-3 mb-3">
                    <div className="flex items-center gap-2 font-semibold">
                      <MdCall></MdCall>
                      <h3> {personInfo?.phone} </h3>
                    </div>
                    <div className=" flex items-center gap-2 font-semibold">
                      <h5>
                        <BiLogoGmail></BiLogoGmail>
                      </h5>
                      {personInfo?.email}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className="mt-11 flex items-center justify-center">
        <a href="/allagent" > <button className="flex items-center gap-2  p-1 py-1 shadow-2xl hover:bg-orange-400 hover:shadow-inner  px-4 rounded-3xl border  uppercase text-black border-yellow-400" > see more <FaArrowRight /> </button> </a>
      </div>
    </>
  );
};
export default Professionals;
