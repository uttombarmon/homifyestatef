import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";

const Blog = () => {
  const [bloge, setBloge] = useState(null);
  // console.log(bloge);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axiosPublic.get(`/home/latestNews/id/${id}`);
          // console.log(response.data);
          setBloge(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [id, axiosPublic]);

  const [latestNews, setLatestNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get(`/home/latestNews`);
        // console.log(response.data);
        setLatestNews(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  return (
    <>
      <section
        className="bg-gray-100 mb-12  h-[320px] md:h-[350px]  relative border-4 grid items-end"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 380px",
          backgroundPosition: "center",
          backgroundImage: "url(https://i.ibb.co/z5QV2NY/breadcrumbs-bg.jpg)",
        }}
      >
        <div className=" opacity-80 text-black  z-10    w-full items-center text-center mb-[10%] absolute" data-aos="fade-down" data-aos-duration="3000">
          <h1 className=" xl:text-5xl text-3xl "> Blog Details </h1>
          <span className=" items-center flex  justify-center gap-1 text-xl mt-7">
            <IoHome></IoHome> Home . Blog details
          </span>
        </div>
      </section>

      <div className="  mt-5   ">
        {/* right site picethure */}
        <div className="px-8 w-full mx-auto flex flex-col md:flex-row lg:flex-row gap-6  justify-between  ">
          <div className=" xl:w-[840px] lg:w-[500px]  md:w-[590px] xl:h-[500px]  h-full ">
            <img src={bloge?.img1} alt="" className=" w-full h-full " data-aos="zoom-in" data-aos-duration="3000" />
            {/* comment and date imge */}
            <div className="flex text-sm gap-3 mt-2 ml-2 font-semibold" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <p className="flex items-center gap-1">
                <BsCalendarDate></BsCalendarDate> {bloge?.date}
              </p>
              <p className=" flex items-center gap-1 ">
                <FaUser></FaUser> 1520-Dhaka Dinajpure
              </p>
              <p className="flex items-center gap-1">
                <FaRegCommentDots></FaRegCommentDots> {bloge?.comment} Comment
              </p>
            </div>
            {/* discription image text */}
            <div className=" mt-5" data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <h1 className=" xl:text-2xl lg:text-xl text-xl  font-bold ">
                How to stage your home for a quick sale
              </h1>
              <p className=" mt-3  text-[16px]  ">{bloge?.overview}</p>
            </div>
            {/*  "" cotetion text imag disc... */}
            <div className=" xl:mt-10 mt-7 text-[16px] xl:px-20" data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <p className="  py-1">{bloge?.shortover}</p>
            </div>
          </div>
          {/* left sitre populat bloge */}
          <div key={bloge?.id} className="xl:w-[450px] lg:w-[520px] ">
            {/* card 1 number */}
            <div className="">
              <h1 className=" xl:text-2xl lg:text-2xl text-xl  xl:mb-10 mb-3 font-medium " data-aos="fade-left" data-aos-duration="2500">
                Popular Blog
              </h1>
              {/* card section  */}
              <div className="gap-4 space-y-3 mb-3" data-aos="fade-left" data-aos-duration="3000">
                {latestNews?.map((populer) => (
                  <div key={populer} className="  flex gap-5">
                    <div>
                      <img
                        src={populer.img2}
                        className=" lg:w-[150px] w-[130px] h-[90px]    "
                        alt=""
                      />
                    </div>
                    <div>
                      <p className=" xl:text-[17px] text-sm    flex items-center gap-2 mb-3">
                        <BsCalendarDate></BsCalendarDate> {populer.date}
                      </p>
                      <h1 className="  text-[15px]   font-semibold">
                        {populer.title}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>

              {/* card tow setion */}
            </div>
            {/* poperty Catagories */}
            <div className=" mb-10" data-aos="fade-left" data-aos-duration="3000">
              <h1 className="xl:text-2xl lg:text-2xl  text-xl font-medium ">
                Property Categories
              </h1>

              <h1 className=" border p-2 px-7  text-[15px] font-semibold mt-5 flex justify-between ">
                Real Estate <span> ({bloge?.realestate} properties) </span>
              </h1>
              <h1 className=" border p-2 px-7  text-[15px]  font-semibold mt-5 flex justify-between ">
                House <span> ( {bloge?.House} properties) </span>
              </h1>
              <h1 className=" border p-2 px-7  text-[15px] font-semibold mt-5 flex justify-between ">
                Home Land <span> ({bloge?.HomeLand} properties) </span>
              </h1>
              <h1 className=" border p-2 px-7  text-[15px] font-semibold mt-5 flex justify-between ">
                Bath Beds <span> ({bloge?.Bath} properties) </span>
              </h1>
            </div>
            {/* popular Tags */}

            <div className=" lg:mb-16 w-[450px]" data-aos="fade-left" data-aos-duration="3000">
              <h1 className=" xl:text-2xl lg:text-2xl text-xl font-medium mb-4 mt-10 ">
                Popular Tags
              </h1>
              <div className=" grid gap-3 justify-between text-center items-center xl:grid-cols-3 lg:grid-cols-3 grid-cols-3 ">
                {bloge?.tag.map((taged) => (
                  <p
                    key={taged}
                    className=" text-sm  border px-2 font-bold py-2 hover:bg-orange-400 "
                  >
                    {taged}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* secound image state section  */}
      <div
        key={bloge?.id}
        className="  mb-6 mt-2  xl:w-[800px] px-6 lg:w-[500px]  md:w-[590px] h-full" >
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
          <img src={bloge?.img2} className=" w-[95%] h-full" alt="" />

          <h1 className=" xl:text-2xl lg:text-xl text-xl font-bold mt-4  mb-5 ">
            {bloge?.maintitle}
          </h1>
          <p className=" ">{bloge?.mainoverview}</p>
        </div>

        {/* start section  */}
        <div className=" mt-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
          <p className="flex items-center gap-3  font-serif">
            <MdOutlineStarPurple500></MdOutlineStarPurple500>
            <span>{bloge?.pointOne}</span>
          </p>
          <p className="flex items-center gap-3 mt-2 mb-2   font-serif ">
            <MdOutlineStarPurple500></MdOutlineStarPurple500>
            <span>{bloge?.pointTow}</span>
          </p>
          <p className="flex items-center gap-3   font-serif">
            <MdOutlineStarPurple500></MdOutlineStarPurple500>
            <span>{bloge?.pointhree}</span>
          </p>
        </div>

        {/* post tages */}
        <div className="mt-6 cursor-pointer  xl:flex justify-between items-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
          <div className="flex gap-3 items-center font-semibold text-xl  ">
            <h1 className="text-xl font-medium "> Post Tags : </h1>
            <p className=" text-[12px]  border px-1 font-bold   hover:bg-orange-300  ">
              House Build
            </p>
            <p className="  text-[12px]  border px-1 font-bold   hover:bg-orange-300  ">
              Estate
            </p>
            <p className="  text-[12px]  border px-1 font-bold   hover:bg-orange-300  ">
              Aparment
            </p>
          </div>
          <div className=" flex gap-6 cursor-pointer  mt-4 items-center">
            <h1 className=" text-xl  font-medium"> Share: </h1>
            <FaFacebookF className=" bg-gray-400 hover:bg-orange-500  rounded-full text-2xl p-1 "></FaFacebookF>
            <FaGoogle className=" bg-gray-400 hover:bg-orange-500  rounded-full text-2xl p-1 "></FaGoogle>
            <FaLinkedin className=" bg-gray-400 hover:bg-orange-500  rounded-full text-2xl p-1 "></FaLinkedin>
            <FaTwitter className=" bg-gray-400 hover:bg-orange-500  rounded-full text-2xl p-1 "></FaTwitter>
          </div>
        </div>
        {/* comment section */}

        <div className="mt-5  px-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
          <h1 className=" text-xl font-medium">2 Commnets</h1>

          <div className=" flex mt-5 items-center gap-4 px-4">
            <div className=" w-10 ">
              <img
                src="../../../public/Screenshot 2024-01-23 232016.png"
                className="rounded-full"
              />
            </div>
            <h1 className=" text-xl font-medium ">
              Douglas Lyphe <br />
              <span className="  text-[12px] ">march 26,2024 At 10.25pm</span>
            </h1>
          </div>
          <p className="px-8 ml-24 mt-1 text-[15px] font-serif">
            Exceptional real estate professionals! Sold eeds!
          </p>

          <h1 className=" border w-[55px] px-2 mb-4 py-1 border-b-green-500 text-[13px]  mt-4  ml-[130px] hover:bg-amber-300">
            replay
          </h1>
        </div>

        {/* secound comment */}
        <hr className="mb-4 mt-4 px-8" />
        {/* leave comment section  */}
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
          <h1 className=" text-xl  xl:ml-0 lg:ml-0 md:ml-3 ml-20 font-medium ">
            Leave a Comment
          </h1>

          <div>
            <div className="mt-4 xl:flex lg:flex flex  gap-8 ml-6">
              <input
                type="text"
                placeholder="Name*"
                className=" border w-[50%] border-black py-2 px-2  "
              />
              <input
                type="email"
                placeholder="Email*"
                className=" w-[50%] border border-black py-2 px-2  "
              />
            </div>
            <div className="mt-4 xl:flex lg:flex flex  gap-8 ml-6">
              <input
                type="text"
                placeholder="Phone*"
                className=" border w-[50%] border-black py-2 px-2  "
              />
              <input
                type="text"
                placeholder="subjcet*"
                className=" w-[50%] border border-black py-2 px-2  "
              />
            </div>
            <div className=" mt-3 ml-6 flex gap-9 justify-between ">
              <textarea
                placeholder="comment"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>
            </div>
            <div className="flex gap-3 items-center mt-2 ml-7">
              <label className="label cursor-pointer">
                <input type="checkbox" defaultChecked className="checkbox" />
              </label>
              <p className=" font-medium text-[14px] ">
                save my name ,email and website inthis browser for the next time
                i comment
              </p>
            </div>
            <button className="  btn  mt-4 ml-8  ">submit comment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
