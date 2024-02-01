// Professionals

import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";

const Professionals = () => {
  const [personInfos, setPersonInfos] = useState([]);
  const axiosPublic = useAxiosPublic();
 


  useEffect(()=>{
    axiosPublic.get('/home/meet-professional')
    .then(data=>{
      
      setPersonInfos(data.data)
    })
  },[axiosPublic]);


  

  return (
    <>
      <div>
        <h1 className=" items-center mt-5 mb-6 text-center font-black lg:text-2xl  text-xl ">
          Meet the Realty Professionals
        </h1>
        <div className="grid justify-center mx-auto md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-2">
          {
            personInfos.map((personInfo, index) =>
              <div key={index} className="card  mx-auto xl:w-[320px] w-[375px] lg:w-[450px] mt-7 bg-white border">
                <div className="group w-full  h-full relative border-slate-500 overflow-hidden">
                  <img
                    src="https://i.ibb.co/Yh6KSBk/images-2.jpg"
                    alt=""
                    className="w-full h-full rounded-t-md" />
                  <div className="absolute top-0 right-full rounded-t-md w-full h-full group-hover:right-0 bg-[#29404788] backdrop-blur-[5px]  p-7 flex flex-col justify-center ">
                    <div className=" items-center flex text-xl text-white text-center gap-5">
                      <button className=" ml-[15%] rounded-full  hover:bg-orange-600 bg-orange-400 p-2 ">
                        <FaTwitter></FaTwitter>
                      </button>

                      <button className="rounded-full bg-gray-300 p-2  hover:bg-gray-500 text-red-500 ">
                        <FaFacebook></FaFacebook>
                      </button>
                      <button className=" rounded-full hover:bg-orange-600 bg-orange-400 p-2 ">
                        <FaLinkedinIn></FaLinkedinIn>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" mt-4 px-6 ">
                  <h2 className=" font-bold text-xl ">
                    {personInfo?.name}
                    <div className="badge badge-secondary ml-3 ">{personInfo?.personalInfo?.listing} listing</div>
                  </h2>
                  <p className="font-medium">{personInfo?.position}</p>
                  <hr className=" bg-black mt-3 " />
                  <div className=" justify-start mt-3 mb-3">
                    <div className="flex items-center gap-2 font-semibold">
                      <MdCall></MdCall>
                      <h3> {personInfo?.social?.phone} </h3>
                    </div>
                    <div className=" flex items-center gap-2 font-semibold">
                      <h5>
                        <BiLogoGmail></BiLogoGmail>
                      </h5>
                      {personInfo?.social?.email}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Professionals;
