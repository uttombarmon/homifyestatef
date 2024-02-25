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
  const [bloge, setBloge] = useState({});
  const { name, img} = bloge
  console.log(bloge);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axiosPublic.get(`/home/meet-professional/id/${id}`);
          // console.log(response.data);
          setBloge(response.data);
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
            {" "}
            <IoHome></IoHome> Home . AGENTPROFILE
          </span>
        </div>
      </section>


 <div  className="lg:flex xl:flex md:flex flex-row cursor-pointer gap-10  mb-5 px-7 relative justify-center">
 <div className=" xl:w-[380px] xl:h-[410px] md:h-[340px] lg:h-[350px] h-[360px]  lg:w-[350px] md:w-[4500px] w-[370px] ">
   <img
     src={img}
     alt=""
     className=" h-full object-cover w-full  "
   />
   <div className="absolute xl:bottom-[220px] lg:bottom-[230px] md:bottom-[320px] bottom-[690px]  ml-7 text-xl ">
     <p className="mt-4 mb-3 bg-yellow-300  hover:bg-yellow-500 p-1 py-2 ">
       {" "}
       <FaFacebook></FaFacebook>{" "}
     </p>
     <p className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 ">
       <FaLinkedinIn></FaLinkedinIn>
     </p>
     <p className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 ">
       <FaTwitter></FaTwitter>
     </p>
   </div>
 </div>

 <div>
   <h1 className="text-3xl font-bold mt-4 "> {name} </h1>
   <p className="mb-6 mt-1"> Sales Executive </p>

   <p className="text-[20px] font-semibold">
     {" "}
     Hello! This is Hasson Deck.{" "}
     <span className="text-[16px] ">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
       Soluta rerum asperiores error dicta doloribus iste at, veritatis
       accusantium <br /> Lorem ipsum dolor sit amet, consectetu <br />
     </span>{" "}
   </p>

   <h1 className=" text-2xl mt-4 font-bold">
     {" "}
     Personalized Information
   </h1>

   <div className="flex gap-5 font-bold mt-4  underline items-center">
     <p>Current Listings</p>
     <p> Experience since:2015</p>
     <p> Locales: Oakland</p>
     <p> Language:English</p>
   </div>

   <div className="xl:flex lg:flex flex-row gap-4 md:flex-row mt-7">
     <div className="flex gap-2">
       <button className="btn btn-outline flex items-center gap-3">
         {" "}
         <MdOutlineMailOutline></MdOutlineMailOutline> Send Email{" "}
       </button>
       <button className="btn btn-outline  flex gap-1 items-center">
         {" "}
         <MdOutlineLocalPhone></MdOutlineLocalPhone> (+088)582 - 45825{" "}
       </button>
     </div>
     <div className="mt-3 xl:mt-0 lg:mt-0 ">
       <button className="btn btn-outline flex gap-1 items-center">
         {" "}
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
