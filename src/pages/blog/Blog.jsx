import { BsCalendarDate } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import { AuthContext } from "../../utils/provider/AuthProvider";
// import useAxiosPrivate from "../../hooks/axiosPrivate/useAxiosPrivate";
import toast from "react-hot-toast";
import BlogeComment from "./BlogeComment";
import BlogePropular from "./BlogePropular";
import BlogePopuler from "./BlogePopuler";
import BlogeBanner from "./BlogeBanner";
import BlogePoint from "./BlogePoint";
import BlogeTag from "./BlogeTag";


const Blog = () => {
  const [bloge, setBloge] = useState(null);
  const formRef = useRef();
  // console.log(bloge);
  // const axiosPrivate = useAxiosPrivate()
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { userInfo } = useContext(AuthContext)
  console.log(userInfo);
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


  // time 
  const currentDate = new Date();
  const defaultTime = {
    hours: 12,  // Set your default hour
    minutes: 0, // Set your default minutes
    seconds: 0, // Set your default seconds
  };
  // Create a new Date object with the current date and default time
  const defaultDateTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    defaultTime.hours,
    defaultTime.minutes,
    defaultTime.seconds
  );
  // dynamic comment 
  const handelCommne = async (e) => {
    e.preventDefault()
    const from = e.target;
    const name = from.name.value;
    const msge = from.comment.value;
    //  console.log(name, email,phone,comment, subjcet);
    const commentData = {
      name,
      photo: userInfo?.photoURL,
      comment: msge,
      id,
      dateTime: defaultDateTime,
    }
    // console.log(commentData);
    try {
      const response = await axiosPublic.put(`/home/latestNews/comment/${id}`, { feedback: commentData });
      const data = response.data;
      console.log(data);
      toast.success("Successfully added comment");
      formRef.current.reset();
    } catch (error) {
      // console.log(error);
      toast.error('Error adding comment');
    }
  }
  return (
    <>
      {/* banner section */}
      <BlogeBanner></BlogeBanner>
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
                <FaRegCommentDots></FaRegCommentDots>{bloge?.feedback?.length} comment
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
                  <BlogePopuler key={populer} populer={populer} ></BlogePopuler>
                ))}
              </div>
            </div>
            {/* poperty Catagories */}
            <div data-aos="fade-left" data-aos-duration="3000">
              <BlogePropular bloge={bloge}></BlogePropular>
            </div>
            {/* popular Tags */}
            <div>
            <BlogeTag bloge={bloge}></BlogeTag>
            </div>
          </div>
        </div>
      </div>
      {/* secound image state section  */}
      <div
        key={bloge?.id}
       data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000" className="  mb-6 mt-2  xl:w-[800px] px-6 lg:w-[500px]  md:w-[590px] h-full">
        <img src={bloge?.img2} className=" w-[95%] h-full" alt="" />
        <h1 className=" xl:text-2xl lg:text-xl text-xl font-bold mt-4  mb-5 ">
          {bloge?.maintitle}
        </h1>
        <p>{bloge?.mainoverview}</p>

        {/* Pointer section  */}
        <BlogePoint bloge={bloge}></BlogePoint>
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
        {bloge?.feedback?.map((comment) => <BlogeComment key={comment.name} comment={comment}></BlogeComment>)}
        {/* secound comment */}
        <hr className="mb-4 mt-4 px-8" />
        {/* leave comment section  */}
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
          <h1 className=" text-xl  xl:ml-0 lg:ml-0 md:ml-3 ml-20 font-medium ">
            Leave a Comment
          </h1>
          <form ref={formRef} onSubmit={handelCommne}>
            <div className="">
              <div className="mt-4 xl:flex lg:flex flex  gap-8 ml-6">
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  defaultValue={userInfo?.name}
                  className=" border w-[50%] border-black py-2 px-2  "
                />
                <input
                  type="email"
                  name="email"
                  defaultValue={userInfo?.email}
                  placeholder="Email*"
                  className=" w-[50%] border border-black py-2 px-2  "
                />
              </div>
              <div className=" mt-3 ml-6 flex gap-9 justify-between ">
                <textarea
                  placeholder="comment"
                  name="comment"
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
              <button type="submit" className="btn btn-outline mt-4 ml-8">submit comment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blog;
