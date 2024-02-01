import { FaArrowRight } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";




const LetesNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const axiosPublic = useAxiosPublic();
 


  useEffect(()=>{
    axiosPublic.get('/home/latestNews')
    .then(data=>{
      setLatestNews(data.data)
    })
  },[axiosPublic])




  console.log(latestNews)
  return (
    <>
      <h1 className=" items-center text-2xl font-bold mb-2 mt-10 text-center w-full ">
        Latest News & Articles
      </h1>
      <div className=" w-full lg:w-[calc(100%-20px)] lg:p-7 mt-8 lg:px-0 mb-3 md:gap-2 md:px-1 gap-3 mx-auto grid lg:grid-cols-3 justify-center md:grid-cols-3 grid-cols-1 ">
        {
          latestNews.map((latestNew, index) =>
            <div key={index} className=" relative rounded w-full lg:w-full mx-auto h-[400px] justify-center ">
              <div className=" w-[calc(100%-20px)] mx-auto md:w-full top-0 h-[300px] bg-cover  shadow-xl relative">
                <img
                  src={latestNew?.img?.img1}
                  className=" h-full w-full rounded-t-md"
                  alt="Shoes"
                />
              </div>
              <div className="absolute bottom-[20px] w-full flex justify-center">
                <div className=" px-3 py-2 rounded-md border left-6 right-6 bg-white w-10/12 items-center   ">
                  <div className="flex items-center text-center  gap-4">
                    <p className="  flex text-sm items-center gap-1  ">
                      <MdDateRange></MdDateRange>{latestNew?.date}
                    </p>
                    <p className="flex  text-sm items-center gap-2">
                      <FaCommentDots></FaCommentDots> {latestNew?.comment?.length} comment
                    </p>
                  </div>
                  <h2 className=" mt-1 text-xl mb-2 font-semibold">
                   {latestNew?.title}
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


          )
        }


      </div>
    </>
  );
};

export default LetesNews;
