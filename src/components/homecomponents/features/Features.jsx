import { FaArrowRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaArrowTurnDown } from "react-icons/fa6";
import { TiArrowMoveOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { CgMathPlus } from "react-icons/cg";


const Features = () => {
  return (

    <>

     <h1 className=" w-full items-center text-center font-bold text-2xl "> Check Out the Lalstest  Real <br /> Estate Listing</h1>
    <div className=" lg:w-[1100px] mt-8 md:w-[900px] mb-3 md:gap-6 mx-auto grid lg:grid-cols-3 justify-center md:grid-cols-2 grid-cols-1  ">   
      <div className=" relative rounded w-full lg:w-[350px] mx-auto h-[400px] justify-center ">
        <div className=" w-full lg:w-[350px]  top-0 h-[300px] bg-cover  shadow-xl relative">
          <img
            src="https://i.ibb.co/vQk7cL2/property-1.jpg"
            className=" h-full w-full   "
            alt="Shoes"
          />
        </div>

        <div className=" absolute px-3 rounded-md shadow-lg left-6 right-6 bottom-[20px] bg-white w-[300px] items-center   ">
          <h2 className=" mt-2 text-xl mb-2 font-semibold">
            Hemosa Casa al Norte
          </h2>
          <div>
            <p className=" font-semibold flex  items-center gap-1 mb-1 text-center">
              <IoLocationSharp></IoLocationSharp> 1520-Dhaka Dinajpure
            </p>
          </div>
          <div className="flex gap-3 mt-2 mb-1 font-medium">
            <div className="flex items-center gap-1  ">
              <IoGameControllerOutline className=" bg-slate-300 rounded-full text-2xl p-1"></IoGameControllerOutline>
              <button> Deds </button>
            </div>
            <div className="flex items-center gap-1  ">
              <FaArrowTurnDown className=" bg-slate-300 rounded-full text-2xl p-1"></FaArrowTurnDown>
              <button> 6 Baths </button>
            </div>
            <div className="flex items-center gap-1  ">
              <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-2xl p-1"></TiArrowMoveOutline>
              <button> 2400sq Ft </button>
            </div>
          </div>
          <hr className=" w-[95%] mx-auto mt-2 font-bold " />
          <div className=" flex justify-between px-2 mt-2 mb-2">
            <div className="flex justify-center items-center gap-2">
              <button className="font-semibold">More Details </button>
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

        {/* icone setp photo  */}

        <div className="absolute px-3  rounded-full  left-[62%]  bottom-[157px]  w-[100px] items-center ">
          <div className="  text-white hover:bg-red-500 bg-orange-500 gap-3 px-2 py-1 ">
            <p className=" font-semibold">
               $ 50,00 
            </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  left-[60%]  bottom-[340px]  w-[100px] items-center ">
          <div className="flex  text-white  gap-3 ">
              <p className=" bg-gray-400 hover:bg-orange-500 rounded-full text-xl p-1 "><IoMdShare/> </p>
            <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "> <FaRegHeart/> </p>
              <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "><CgMathPlus/> </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  right-[68%]  bottom-[300px]  w-[100px] items-center ">
          <div className="text-white flex flex-col  gap-1 ">
              <p className=" bg-black hover:bg-orange-400 items-center text-center p-1 font-bold rounded-full"> Rent </p>
              <p className=" bg-red-400 hover:bg-orange-400 items-center text-center p-1 rounded-full font-bold">Features</p>
          </div>
        </div>
      </div>

      {/* 2nd card */}
      <div className=" relative rounded w-full lg:w-[350px] mx-auto h-[400px] justify-center ">
        <div className=" w-full lg:w-[350px] top-0 h-[300px] bg-cover  shadow-xl relative">
          <img
            src="https://i.ibb.co/T8qfrvw/property-3.jpg"
            className="h-full w-full"
            alt="Shoes"
          />
        </div>

        <div className=" absolute px-3  shadow-lg rounded-md left-6 right-6 bottom-[20px] bg-white w-[300px] items-center   ">
          <h2 className=" mt-2 text-xl mb-2 font-semibold">
            Beautifull Condo in London
          </h2>
          <div>
            <p className=" font-semibold flex  items-center gap-1 mb-1 text-center">
              {" "}
              <IoLocationSharp></IoLocationSharp> 1520-Dhaka Dinajpure
            </p>
          </div>
          <div className="flex gap-3 mt-2 mb-1 font-medium">
            <div className="flex items-center gap-1  ">
              <IoGameControllerOutline className=" bg-slate-300 rounded-full text-2xl p-1"></IoGameControllerOutline>
              <button> Deds </button>
            </div>
            <div className="flex items-center gap-1  ">
              <FaArrowTurnDown className=" bg-slate-300 rounded-full text-2xl p-1"></FaArrowTurnDown>
              <button> 6 Baths </button>
            </div>
            <div className="flex items-center gap-1  ">
              <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-2xl p-1"></TiArrowMoveOutline>
              <button> 2400sq Ft </button>
            </div>
          </div>
          <hr className=" w-[95%] mx-auto mt-2 font-bold " />
          <div className=" flex justify-between px-2 mt-2 mb-2">
            <div className="flex justify-center items-center gap-2">
              <button className="font-semibold">More Details </button>
              <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
            </div>

            {/* reation  */}
            <p className="  ">
      
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
        <div className="absolute px-3  rounded-full  left-[62%]  bottom-[157px]  w-[100px] items-center ">
          <div className="  text-white hover:bg-red-500 bg-orange-500 gap-3 px-2 py-1 ">
            <p className=" font-semibold">
               $ 50,00 
            </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  left-[60%]  bottom-[340px]  w-[100px] items-center ">
          <div className="flex  text-white  gap-3 ">
              <p className=" bg-gray-400 hover:bg-orange-500 rounded-full text-xl p-1 "><IoMdShare/> </p>
            <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "> <FaRegHeart/> </p>
              <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "><CgMathPlus/> </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  right-[68%]  bottom-[300px]  w-[100px] items-center ">
          <div className="text-white flex flex-col  gap-1 ">
              <p className=" bg-black hover:bg-orange-400 items-center text-center p-1 font-bold rounded-full"> Rent </p>
              <p className=" bg-red-400 hover:bg-orange-400 items-center text-center p-1 rounded-full font-bold">Features</p>
          </div>
        </div>
      </div>

      {/* 3th card */}
      <div className=" relative rounded w-full lg:w-[350px] mx-auto h-[400px] justify-center ">
        <div className=" w-full lg:w-[350px] top-0 h-[300px] bg-cover  shadow-xl relative">
          <img
            src="https://i.ibb.co/nC3D9qw/property-6.jpg"
            className="h-full w-full"
            alt="Shoes"
          />
        </div>

        <div className=" absolute px-3  shadow-lg rounded-md left-6 right-6 bottom-[20px] bg-white w-[300px] items-center   ">
          <h2 className=" mt-2 text-xl mb-2 font-semibold">
            Leisure Beautiful Health
          </h2>
          <div>
            <p className=" font-semibold flex  items-center gap-1 mb-1 text-center">
              {" "}
              <IoLocationSharp></IoLocationSharp> 1520-Dhaka Dinajpure
            </p>
          </div>
          <div className="flex gap-3 mt-2 mb-1 font-medium">
            <div className="flex items-center gap-1  ">
              <IoGameControllerOutline className=" bg-slate-300 rounded-full text-2xl p-1"></IoGameControllerOutline>
              <button> Deds </button>
            </div>
            <div className="flex items-center gap-1  ">
              <FaArrowTurnDown className=" bg-slate-300 rounded-full text-2xl p-1"></FaArrowTurnDown>
              <button> 6 Baths </button>
            </div>
            <div className="flex items-center gap-1  ">
              <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-2xl p-1"></TiArrowMoveOutline>
              <button> 2400sq Ft </button>
            </div>
          </div>
          <hr className=" w-[95%] mx-auto mt-2 font-bold " />
          <div className=" flex justify-between px-2 mt-2 mb-2">
            <div className="flex justify-center items-center gap-2">
              <button className="font-semibold">More Details </button>
              <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
            </div>

            {/* reation  */}
            <p className="  ">
          
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
        <div className="absolute px-3  rounded-full  left-[62%]  bottom-[157px]  w-[100px] items-center ">
          <div className="  text-white hover:bg-red-500 bg-orange-500 gap-3 px-2 py-1 ">
            <p className=" font-semibold">
               $ 50,00 
            </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  left-[60%]  bottom-[340px]  w-[100px] items-center ">
          <div className="flex  text-white  gap-3 ">
              <p className=" bg-gray-400 hover:bg-orange-500 rounded-full text-xl p-1 "><IoMdShare/> </p>
            <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "> <FaRegHeart/> </p>
              <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "><CgMathPlus/> </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  right-[68%]  bottom-[300px]  w-[100px] items-center ">
          <div className="text-white flex flex-col  gap-1 ">
              <p className=" bg-black hover:bg-orange-400 items-center text-center p-1 font-bold rounded-full"> Rent </p>
              <p className=" bg-red-400 hover:bg-orange-400 items-center text-center p-1 rounded-full font-bold">Features</p>
          </div>
        </div>
      </div>
      {/* 4th */}
      <div className=" relative rounded w-full lg:w-[350px] mx-auto h-[400px] justify-center ">
        <div className=" w-full lg:w-[350px] top-0 h-[300px] bg-cover  shadow-xl relative">
          <img
            src="https://i.ibb.co/vQk7cL2/property-1.jpg"
            className="h-full w-full"
            alt="Shoes"
          />
        </div>

        <div className=" absolute px-3 rounded-md  shadow-lg left-6 right-6 bottom-[20px] bg-white w-[300px] items-center   ">
          <h2 className=" mt-2 text-xl mb-2 font-semibold">
            Hemosa Casa al Norte
          </h2>
          <div>
            <p className=" font-semibold flex  items-center gap-1 mb-1 text-center">
              {" "}
              <IoLocationSharp></IoLocationSharp> 1520-Dhaka Dinajpure
            </p>
          </div>
          <div className="flex gap-3 mt-2 mb-1 font-medium">
            <div className="flex items-center gap-1  ">
              <IoGameControllerOutline className=" bg-slate-300 rounded-full text-2xl p-1"></IoGameControllerOutline>
              <button> Deds </button>
            </div>
            <div className="flex items-center gap-1  ">
              <FaArrowTurnDown className=" bg-slate-300 rounded-full text-2xl p-1"></FaArrowTurnDown>
              <button> 6 Baths </button>
            </div>
            <div className="flex items-center gap-1  ">
              <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-2xl p-1"></TiArrowMoveOutline>
              <button> 2400sq Ft </button>
            </div>
          </div>
          <hr className=" w-[95%] mx-auto mt-2 font-bold " />
          <div className=" flex justify-between px-2 mt-2 mb-2">
            <div className="flex justify-center items-center gap-2">
              <button className="font-semibold">More Details </button>
              <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
            </div>

            {/* reation  */}
            <p className="  ">
              {" "}
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
        <div className="absolute px-3  rounded-full  left-[62%]  bottom-[157px]  w-[100px] items-center ">
          <div className="  text-white hover:bg-red-500 bg-orange-500 gap-3 px-2 py-1 ">
            <p className=" font-semibold">
               $ 50,00 
            </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  left-[60%]  bottom-[340px]  w-[100px] items-center ">
          <div className="flex  text-white  gap-3 ">
              <p className=" bg-gray-400 hover:bg-orange-500 rounded-full text-xl p-1 "><IoMdShare/> </p>
            <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "> <FaRegHeart/> </p>
              <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "><CgMathPlus/> </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  right-[68%]  bottom-[300px]  w-[100px] items-center ">
          <div className="text-white flex flex-col  gap-1 ">
              <p className=" bg-black hover:bg-orange-400 items-center text-center p-1 font-bold rounded-full"> Rent </p>
              <p className=" bg-red-400 hover:bg-orange-400 items-center text-center p-1 rounded-full font-bold">Features</p>
          </div>
        </div>
      </div>
      <div className=" relative rounded w-full lg:w-[350px] mx-auto h-[400px] justify-center">
        <div className=" w-full lg:w-[350px] top-0 h-[300px] bg-cover  shadow-xl relative">
          <img
            src="https://i.ibb.co/W037mk1/property-2.jpg"
            className="h-full w-full"
            alt="Shoes"
          />
        </div>

        <div className=" absolute px-3 rounded-md  shadow-lg left-6 right-6 bottom-[20px] bg-white w-[300px] items-center   ">
          <h2 className=" mt-2 text-xl mb-2 font-semibold">
            Kolte Parti Life Repulic
          </h2>
          <div>
            <p className=" font-semibold flex  items-center gap-1 mb-1 text-center">
            
              <IoLocationSharp></IoLocationSharp> 1520-Dhaka Dinajpure
            </p>
          </div>
          <div className="flex gap-3 mt-2 mb-1 font-medium">
            <div className="flex items-center gap-1  ">
              <IoGameControllerOutline className=" bg-slate-300 rounded-full text-2xl p-1"></IoGameControllerOutline>
              <button> Deds </button>
            </div>
            <div className="flex items-center gap-1  ">
              <FaArrowTurnDown className=" bg-slate-300 rounded-full text-2xl p-1"></FaArrowTurnDown>
              <button> 6 Baths </button>
            </div>
            <div className="flex items-center gap-1  ">
              <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-2xl p-1"></TiArrowMoveOutline>
              <button> 2400sq Ft </button>
            </div>
          </div>
          <hr className=" w-[95%] mx-auto mt-2 font-bold " />
          <div className=" flex justify-between px-2 mt-2 mb-2">
            <div className="flex justify-center items-center gap-2">
              <button className="font-semibold">More Details </button>
              <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
            </div>

            {/* reation  */}
            <p className="  ">
              {" "}
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
        <div className="absolute px-3  rounded-full  left-[62%]  bottom-[157px]  w-[100px] items-center ">
          <div className="  text-white hover:bg-red-500 bg-orange-500 gap-3 px-2 py-1 ">
            <p className=" font-semibold">
               $ 50,00 
            </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  left-[60%]  bottom-[340px]  w-[100px] items-center ">
          <div className="flex  text-white  gap-3 ">
              <p className=" bg-gray-400 hover:bg-orange-500 rounded-full text-xl p-1 "><IoMdShare/> </p>
            <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "> <FaRegHeart/> </p>
              <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "><CgMathPlus/> </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  right-[68%]  bottom-[300px]  w-[100px] items-center ">
          <div className="text-white flex flex-col  gap-1 ">
              <p className=" bg-black hover:bg-orange-400 items-center text-center p-1 font-bold rounded-full"> Rent </p>
              <p className=" bg-red-400 hover:bg-orange-400 items-center text-center p-1 rounded-full font-bold">Features</p>
          </div>
        </div>
      </div>
      <div className=" relative rounded w-full lg:w-[350px] mx-auto h-[400px] justify-center ">
        <div className=" w-full lg:w-[350px] top-0 h-[300px] bg-cover  shadow-xl relative">
          <img
            src="https://i.ibb.co/vQk7cL2/property-1.jpg"
            className="h-full w-full"
            alt="Shoes"
          />
        </div>

        <div className=" absolute px-3 rounded-md  shadow-lg left-6 right-6 bottom-[20px] bg-white w-[300px] items-center   ">
          <h2 className=" mt-2 text-xl mb-2 font-semibold">
            Hemosa Casa al Norte
          </h2>
          <div>
            <p className=" font-semibold flex  items-center gap-1 mb-1 text-center">
              {" "}
              <IoLocationSharp></IoLocationSharp> 1520-Dhaka Dinajpure
            </p>
          </div>
          <div className="flex gap-3 mt-2 mb-1 font-medium">
            <div className="flex items-center gap-1  ">
              <IoGameControllerOutline className=" bg-slate-300 rounded-full text-2xl p-1"></IoGameControllerOutline>
              <button> Deds </button>
            </div>
            <div className="flex items-center gap-1  ">
              <FaArrowTurnDown className=" bg-slate-300 rounded-full text-2xl p-1"></FaArrowTurnDown>
              <button> 6 Baths </button>
            </div>
            <div className="flex items-center gap-1  ">
              <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-2xl p-1"></TiArrowMoveOutline>
              <button> 2400sq Ft </button>
            </div>
          </div>
          <hr className=" w-[95%] mx-auto mt-2 font-bold " />
          <div className=" flex justify-between px-2 mt-2 mb-2">
            <div className="flex justify-center items-center gap-2">
              <button className="font-semibold">More Details </button>
              <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
            </div>

            {/* reation  */}
            <p className="  ">
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
        <div className="absolute px-3  rounded-full  left-[62%]  bottom-[157px]  w-[100px] items-center ">
          <div className="  text-white hover:bg-red-500 bg-orange-500 gap-3 px-2 py-1 ">
            <p className=" font-semibold">
               $ 50,00 
            </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  left-[60%]  bottom-[340px]  w-[100px] items-center ">
          <div className="flex  text-white  gap-3 ">
              <p className=" bg-gray-400 hover:bg-orange-500 rounded-full text-xl p-1 "><IoMdShare/> </p>
            <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "> <FaRegHeart/> </p>
              <p  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 "><CgMathPlus/> </p>
          </div>
        </div>

        <div className="absolute px-3  rounded-full  right-[68%]  bottom-[300px]  w-[100px] items-center ">
          <div className="text-white flex flex-col  gap-1 ">
              <p className=" bg-black hover:bg-orange-400 items-center text-center p-1 font-bold rounded-full"> Rent </p>
              <p className=" bg-red-400 hover:bg-orange-400 items-center text-center p-1 rounded-full font-bold">Features</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Features;
