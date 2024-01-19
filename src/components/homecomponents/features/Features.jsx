import { FaArrowRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaArrowTurnDown } from "react-icons/fa6";
import { TiArrowMoveOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { CgMathPlus } from "react-icons/cg";
import { useEffect, useState } from "react";



const Features = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" w-full py-10">
        <h1 className=" my-4 w-full items-center text-center font-bold text-2xl h-fit "> Check Out the Latest  Real <br /> Estate Listing</h1>

        <div className="grid relative  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto bg-slate-100 gap-5">
          {properties?.map((properties) => (
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
                      <button className=" text-sm">beds {properties.beds} </button>
                    </div>
                    <div className="flex items-center gap-1  ">
                      <FaArrowTurnDown className=" bg-slate-300 rounded-full text-[20px] p-1"></FaArrowTurnDown>
                      <button className=" text-sm">
                        baths {properties.baths}{" "}
                      </button>
                    </div>
                    <div className="flex items-center gap-1  ">
                      <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-xs p-1"></TiArrowMoveOutline>
                      <button className=" text-sm">{properties.sqft}sq Ft </button>
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
                    <p>
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
                          checked
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
                    </p>
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
      </div>
    </>
  );
};

export default Features;
