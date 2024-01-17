import { FaArrowRight } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa6";



const LetesNews = () => {
  return (
    <>
    <h1 className=" items-center text-2xl font-bold mb-2 mt-10 text-center w-full ">
          Letes New & Articles
    </h1>
    <div className=" lg:w-[1150px] lg:p-7 mt-8 md:w-[900px] mb-3 md:gap-6 mx-auto grid lg:grid-cols-3 justify-center md:grid-cols-2 grid-cols-1 ">
      <div className=" relative rounded w-full  lg:w-[350px] mx-auto h-[400px] justify-center ">
        <div className=" w-full lg:w-[350px]  top-0 h-[300px] bg-cover  shadow-xl relative">
          <img
            src="https://i.ibb.co/vQk7cL2/property-1.jpg"
            className=" h-full w-full   "
            alt="Shoes"
          />
        </div>

        <div className=" absolute px-3 py-2 rounded-md border left-6 right-6 bottom-[20px] bg-white w-[300px] items-center   ">
        <div className="flex items-center text-center  gap-4">
            <p className="  flex text-sm items-center gap-1  ">
              <MdDateRange></MdDateRange> march 24,2024
            </p>
            <p className="flex  text-sm items-center gap-2">
                <FaCommentDots></FaCommentDots> 3 comment
            </p>
          </div>
          <h2 className=" mt-1 text-xl mb-2 font-semibold">
           How to stage yout home for a quick sale.
          </h2>
          <div className=" flex justify-between  mt-2 mb-3">
            <div className="flex justify-center items-center gap-2">
              <button className="font-semibold">Read more</button>
              <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative rounded w-full  lg:w-[350px] mx-auto h-[400px] justify-center ">
        <div className=" w-full lg:w-[350px]  top-0 h-[300px] bg-cover  shadow-xl relative">
          <img
            src="https://i.ibb.co/vQk7cL2/property-1.jpg"
            className=" h-full w-full   "
            alt="Shoes"
          />
        </div>

        <div className=" absolute px-3 py-2 rounded-md border left-6 right-6 bottom-[20px] bg-white w-[300px] items-center   ">
        <div className="flex items-center text-center  gap-4">
            <p className="  flex text-sm items-center gap-1  ">
              <MdDateRange></MdDateRange> march 24,2024
            </p>
            <p className="flex  text-sm items-center gap-2">
                <FaCommentDots></FaCommentDots> 3 comment
            </p>
          </div>
          <h2 className=" mt-1 text-xl mb-2 font-semibold">
           How to stage yout home for a quick sale.
          </h2>
          <div className=" flex justify-between  mt-2 mb-3">
            <div className="flex justify-center items-center gap-2">
              <button className="font-semibold">Read more</button>
              <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative rounded w-full  lg:w-[350px] mx-auto h-[400px] justify-center ">
        <div className=" w-full lg:w-[350px]  top-0 h-[300px] bg-cover  shadow-xl relative">
          <img
            src="https://i.ibb.co/vQk7cL2/property-1.jpg"
            className=" h-full w-full   "
            alt="Shoes"
          />
        </div>

        <div className=" absolute px-3 py-2 rounded-md border left-6 right-6 bottom-[20px] bg-white w-[300px] items-center   ">
        <div className="flex items-center text-center  gap-4">
            <p className="  flex text-sm items-center gap-1  ">
              <MdDateRange></MdDateRange> march 24,2024
            </p>
            <p className="flex  text-sm items-center gap-2">
                <FaCommentDots></FaCommentDots> 3 comment
            </p>
          </div>
          <h2 className=" mt-1 text-xl mb-2 font-semibold">
           How to stage yout home for a quick sale.
          </h2>
          <div className=" flex justify-between  mt-2 mb-3">
            <div className="flex justify-center items-center gap-2">
              <button className="font-semibold">Read more</button>
              <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LetesNews ;
