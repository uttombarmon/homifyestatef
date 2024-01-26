import { FaArrowRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaArrowTurnDown } from "react-icons/fa6";
import { TiArrowMoveOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { CgMathPlus } from "react-icons/cg";
import { useEffect, useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

import { IoHome } from "react-icons/io5";
// import propatices from "../../public/data.json"

const AgentProfile = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../public/datap.json");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //   pagination

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerpage = 9;
  const lastIndex = currentPage * recordsPerpage;
  const firstIndex = lastIndex - recordsPerpage;
  const records = properties.slice(firstIndex, lastIndex);
  const npage = Math.ceil(properties.length / recordsPerpage);

  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log(numbers);

  return (
    <>
      {/* BANNER SECTION  */}

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
          <span className=" items-center flex  justify-center gap-1 text-SM mt-7"> <IoHome></IoHome> Home . AGENTPROFILE</span>
        </div>
      </section>

         {/* stactic card section  */}

          <div className="lg:flex xl:flex md:flex flex-row cursor-pointer gap-10  mb-5 px-7 relative justify-center">
            <div>
              <img src="https://i.ibb.co/SrMcw7c/agent-details-img-1.jpg" alt="" className=" xl:w-[380px] lg:w-[350px] md:w-[470px] w-[340px]  " />
              <div className="absolute xl:bottom-[240px] lg:bottom-[200px] md:bottom-[260px] bottom-[650px]  ml-7 text-xl ">
                 <p className="mt-4 mb-3 bg-yellow-300  hover:bg-yellow-500 p-1 py-2 "> <FaFacebook></FaFacebook> </p>
                 <p  className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 "><FaLinkedinIn></FaLinkedinIn></p>
                 <p  className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 ">
                 <FaTwitter></FaTwitter>
                 </p>
              
              </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold mt-4 "> Hanson Deck </h1>
                <p className="mb-6 mt-1"> Sales Executive </p>

                 <p className="text-[20px] font-semibold"> Hello! This is Hasson Deck. <span className="text-[16px] ">Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. <br /> Soluta rerum asperiores error dicta doloribus iste at, veritatis accusantium <br /> Lorem ipsum dolor sit amet, consectetu <br />
             </span> </p>

                   <h1 className=" text-2xl mt-4 font-bold"> Personalized Information</h1>

                   <div className="flex gap-5 font-bold mt-4  underline items-center">
                    
                    <p>Current Listings</p>
                    <p> Experience since:2015</p>
                    <p> Locales: Oakland</p>
                    <p> Language:English</p>
                   </div>

                  <div className="xl:flex lg:flex flex-row gap-4 md:flex-row mt-7">
                  <div className="flex gap-2">
                  <button className="btn btn-outline flex items-center gap-3"> < MdOutlineMailOutline></MdOutlineMailOutline> Send Email </button>
                    <button  className="btn btn-outline  flex gap-1 items-center"> <MdOutlineLocalPhone></MdOutlineLocalPhone> (+088)582 - 45825 </button>
                  </div>
                    <div className="mt-3 xl:mt-0 lg:mt-0 ">
                    <button  className="btn btn-outline flex gap-1 items-center"> <IoLogoWhatsapp></IoLogoWhatsapp> WhatsApp</button>

                    </div>
                  </div>

            </div>
          </div>


            

      {/* card section and pagination */}

      <div className=" w-full py-10">
        <h1 className=" my-4 w-full px-7 flex justify-between  items-center text-center font-bold xl:text-3xl text-2xl h-fit ">
          Broker Listings <span className="underline text-2xl"> Properties:{properties.length} </span>
        </h1>

        <div className="grid relative  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto bg-slate-100 gap-5">
          {records?.map((properties ) => (
            <div
              key={properties.id}
              className="  p-2 relative  rounded  lg:w-full md:w-[300px] w-[350px] mx-auto h-[400px] justify-center "
            >
              <div className="lg:w-full md:w-[300px] top-0 h-[300px]   shadow-xl relative">
                <img
                  src={properties.image}
                  className=" h-full  w-full rounded-t-md "
                  alt="Shoes"
                />
              </div>
              {/* description part */}
              <div className=" absolute bottom-[20px] w-full flex justify-center">
                <div className="px-3 py-3 rounded-md shadow-lg bg-white lg:w-3/4  md:w-[280px] items-center   ">
                  <h2 className=" mt-2 lg:text-[18px] text-sm mb-2 font-semibold">
                    {/* Hemosa Casa al Norte */} {properties.title}
                  </h2>
                  <div>
                    <p className=" font-semibold flex text-sm  items-center gap-1 mb-1 text-center">
                      <IoLocationSharp></IoLocationSharp> {properties.location}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-2 mb-1  text-[15px] font-medium">
                    <div className="flex items-center gap-1  ">
                      <IoGameControllerOutline className=" bg-slate-300 rounded-full text-[20px] p-1"></IoGameControllerOutline>
                      <button className=" text-sm">
                        beds {properties.beds}{" "}
                      </button>
                    </div>
                    <div className="flex items-center gap-1  ">
                      <FaArrowTurnDown className=" bg-slate-300 rounded-full text-[20px] p-1"></FaArrowTurnDown>
                      <button className=" text-sm">
                        baths {properties.baths}{" "}
                      </button>
                    </div>
                    <div className="flex items-center gap-1  ">
                      <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-xs p-1"></TiArrowMoveOutline>
                      <button className=" text-sm">
                        {properties.sqft}sq Ft{" "}
                      </button>
                    </div>
                  </div>
                  <hr className=" w-[95%] mx-auto mt-2 font-bold " />
                  <div className=" flex justify-between px-2 mt-2 mb-2">
                    <div className="flex justify-center items-center gap-2">
                      <button className="font-semibold text-sm ">
                        More Details{" "}
                      </button>
                      <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
                    </div>

                    {/* reation  */}
                    <div>
                      <div className="rating rating-sm">
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                          
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* icone setp photo  */}

              <div className="absolute px-3  rounded-full  left-[60%] lg:left-[60%] lg:bottom-[180px] xl:bottom-[160px] bottom-[160px] items-center ">
                <div className=" rounded-md text-white hover:bg-red-500 bg-orange-500 gap-3 px-2 py-1 ">
                  <p className=" font-semibold">{properties.price}</p>
                </div>
              </div>
              {/* rent, Features and share section  */}
              <div className=" absolute flex flex-row-reverse top-20 left-10">
                <div className="px-3  rounded-full lg:ml-10  bottom-[340px]  w-[100px] items-center ">
                  <div className="flex  text-white  gap-2 ">
                    <p className=" bg-gray-400 hover:bg-orange-500 rounded-full text-xl p-1 ">
                      <IoMdShare />
                    </p>
                    <p className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 ">
                      <FaRegHeart />
                    </p>
                    <p className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 ">
                      <CgMathPlus />
                    </p>
                  </div>
                </div>

                <div className="px-3  rounded-full bottom-[300px]  w-[100px] items-center ">
                  <div className="text-white flex flex-col  gap-1 ">
                    <p className=" bg-black hover:bg-orange-400 items-center text-center p-1 font-bold rounded-full">
                      Rent
                    </p>
                    <p className=" bg-red-400 hover:bg-orange-400 items-center text-center p-1 rounded-full font-bold">
                      Features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" mt-12 max-w-full flex justify-center mx-auto  items-center text-center">
          <ul className=" flex items-center text-center gap-3">
            <li className=" font-bold p-2 cursor-pointer rounded-full ">
              <a
                onClick={prepage}
                className="flex items-center bg-gray-300  hover:bg-gray-400  p-2 rounded-lg px-2 text-center "
              >
       
                <MdOutlineNavigateBefore></MdOutlineNavigateBefore> prev
              </a>
            </li>
            {numbers?.map((number) => (
              <li
                className={`   hover:bg-gray-300  rounded-full py-2 px-2 ${
                  currentPage === number ? "active" : ""
                }`}
                key={number}
              >
                <a
                  href="#"
                  className=" text-xl font-bold p-2  "
                  onClick={() => changeCpage(number)}
                >
                  {number}{" "}
                </a>
              </li>
            ))}

            <li className=" p-2 cursor-pointer rounded-full font-bold">
              <a
                className="flex items-center bg-gray-300 hover:bg-gray-400 p-2 rounded-lg px-2 text-center "
                onClick={nextpage}
              >
         
                Next <MdOutlineNavigateNext></MdOutlineNavigateNext>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  function prepage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCpage(number) {
    setCurrentPage(number);
  }
  function nextpage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default AgentProfile;