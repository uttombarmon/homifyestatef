import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/axiosPublic/useAxiosPublic";
import Features from "../components/homecomponents/features/Features";

const Properties = () => {
  const [blog, setBlog] = useState();
  // console.log(blog);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axiosPublic.get(`/users/all/agent/id/${id}`);
          // console.log(response.data);
          setBlog(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [id, axiosPublic]);

  return (
    <>
      <section
        className="bg-gray-100 mb-20  h-[320px] md:h-[400px] relative border-4 grid items-end"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 700px",
          backgroundPosition: "center",
          backgroundImage: "url(https://i.ibb.co/8PmVZMt/banner-bg.jpg)",
        }}
      >
        <div className=" opacity-80 text-black  z-10    w-full items-center text-center mb-[15%] absolute">
          <h1 className=" text-5xl "> Agent Profile </h1>
          <span className=" items-center flex  justify-center gap-1 text-SM mt-7">
            
            <IoHome></IoHome> Home . AGENTPROFILE
          </span>
        </div>
      </section>
     <div className="lg:flex xl:flex font-sans py-4 overflow-x-hidden lg:w-[1200px] mx-auto  border md:flex flex-row cursor-pointer gap-10  mb-5 px-7 relative justify-center">
          <div className=" xl:w-[380px] xl:h-[410px] md:h-[340px] lg:h-[350px] h-[360px]  lg:w-[330px] md:w-[400px] w-[370px] ">
            <img
              src={blog?.photoURL}
              alt=""
              className=" h-full object-cover w-full  "
            />
            <div className="absolute xl:bottom-[220px] lg:bottom-[230px] md:bottom-[450px] bottom-[740px]  ml-7 text-xl ">
              <p className="mt-4 mb-3 bg-yellow-300  hover:bg-yellow-500 p-1 py-2 ">

                <FaFacebook></FaFacebook>
              </p>
              <p className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 ">
                <FaLinkedinIn></FaLinkedinIn>
              </p>
              <p className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 ">
                <FaTwitter></FaTwitter>
              </p>
            </div>
          </div>

          <div className="lg:w-[65%] md:w-[50%] ">
            <h1 className="text-3xl font-bold mt-4  "> {blog?.name} </h1>
            <p className="mb-6 mt-1 text-gray-500"> {blog?.role} </p>

            <p className="text-[20px] font-semibold">
              Hello! This is
              <span className="text-[16px] text-gray-500 px-4 ">
                {blog?.description}
              </span>
            </p>

            <h1 className=" text-2xl mt-4 font-bold">
              Personalized Information
            </h1>

            <div className="flex gap-5 text-gray-500 font-bold mt-4  underline items-center">
              <p>Current Listings</p>
              <p> Experience since:2015</p>
              <p> Locales: Oakland</p>
            </div>

            <div className="xl:flex lg:flex  text-black flex-row gap-4 md:flex-row mt-7">
              <div className="flex gap-2">
                <button className="btn  hover:bg-yellow-400 flex items-center gap-3">
                  <MdOutlineMailOutline></MdOutlineMailOutline> button
                </button>
                <button className="btn  hover:bg-yellow-400 flex gap-1 items-center">
                  <MdOutlineLocalPhone></MdOutlineLocalPhone> {blog?.phone}
                </button>
              </div>
              <div className="mt-3 xl:mt-0 lg:mt-0 ">
                <button className="btn   hover:bg-yellow-400 flex gap-1 items-center">
                  <IoLogoWhatsapp></IoLogoWhatsapp> WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      <Features></Features>
    </>
  );


};

export default Properties;
