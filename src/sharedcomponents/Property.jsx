import { FaArrowRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { FaArrowTurnDown } from "react-icons/fa6";
import { TiArrowMoveOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
// import Modal from "react-modal";
import {  NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../utils/provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/axiosPublic/useAxiosPublic";
const Property = ({ properties }) => {  
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const title = properties.title
  let titles;
  if (title?.length > 20) {
    titles = title.slice(0, 20) + '...'
  } else {
    titles = title
  }

  // add whilist
  const handelWhilist = (properties) => {
    const { author} = properties ;
    // console.log( author);

    const addWhilist = {
      email: user?.email,
      image: properties.property_image,
      name: properties.title,
      price: properties.property_details?.price,
      propety: properties._id,
      author: author?.contact,
    };
    // console.log(addWhilist);

    axiosPublic.post("/wish-lists", addWhilist).then((res) => {
      // console.log(res.data);
      if (res.data) {
        toast.success("Successfully added whilist !");
      }
    });
  };

  return (
    <div
      key={properties?._id}
      className="  p-2 relative  rounded  lg:w-full md:w-[300px] w-[350px] mx-auto h-[400px] justify-center " data-aos="zoom-in" data-aos-duration="1000"
    >
      <div className="lg:w-full md:w-[300px] top-0 h-[300px]   shadow-xl relative" >
        <img
          src={properties?.property_image}
          className=" h-full  w-full rounded-t-md "
          alt=""
        />
      </div>
      {/* description part */}
      <div className=" absolute bottom-[20px] w-full flex justify-center">
        <div className="px-3   py-3 rounded-md shadow-lg bg-white lg:w-3/4 mr-3 md:w-[280px] xl:mr-4 md:mr-0 lg:mr-4  items-center " >
          <h2 className=" mt-2 lg:text-[18px] text-sm mb-2 font-semibold">
            {/* Hemosa Casa al Norte */} {titles}
          </h2>
          <div >
            <p className=" font-semibold flex text-sm  items-center gap-1 mb-1 text-center">
              <IoLocationSharp></IoLocationSharp> {properties?.location}
            </p>
          </div>
          <div className="flex gap-3 mt-2 mb-1  text-[15px] font-medium">
            <div className="flex items-center gap-1  ">
              <IoGameControllerOutline className=" bg-slate-300 rounded-full text-[20px] p-1"></IoGameControllerOutline>
              <button className=" text-sm">
                beds {properties?.property_details?.bed_rooms}
              </button>
            </div>
            <div className="flex items-center gap-1  ">
              <FaArrowTurnDown className=" bg-slate-300 rounded-full text-[20px] p-1"></FaArrowTurnDown>
              <button className=" text-sm">
                baths {properties?.property_details?.baths}
              </button>
            </div>
            <div className="flex items-center gap-1  ">
              <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-xs p-1"></TiArrowMoveOutline>
              <button className=" text-sm">
                {properties?.property_details?.size}sq Ft
              </button>
            </div>
          </div>
          <hr className=" w-[95%] mx-auto mt-2 font-bold " />
          <div className=" flex justify-between px-2 mt-2 mb-2">
            <div className="flex justify-center items-center gap-2">
              <NavLink
                to={`/properties/${properties._id}`}
                className="font-semibold text-sm "
              >
                More Details
              </NavLink>
              <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
            </div>
            {/* reation  */}
            <div>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* icone setp photo  */}

      <div className="absolute px-3  rounded-full  left-[60%] lg:left-[60%] lg:bottom-[180px] xl:bottom-[160px] bottom-[160px] items-center ">
        <div className=" rounded-md text-white hover:bg-red-500 bg-orange-500 gap-3 px-2 py-1 ">
          <p className=" font-semibold">$ {properties?.property_details?.price}</p>
        </div>
      </div>
      {/* rent, Features and share section  */}
      <div className=" absolute flex   flex-row-reverse top-5 left-10 justify-between mx-auto ">
        <div className="px-3  rounded-full xl:ml-44 lg:ml-14 md:ml-12  ml-24 bottom-[340px]  w-[100px] items-center ">
          <div className="flex  text-white  gap-2 ">
            {/* share button  */}
            <div >
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <IoMdShare  className=" bg-gray-400 hover:bg-orange-500  rounded-full text-3xl p-1 " />
              </button>

              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-black text-center">
                    Share in a post
                  </h3>
                  <div className="">
                    <img
                      src="https://i.ibb.co/GspjGPV/divider.png"
                      alt=""
                      className="w-full h-8"
                    />
                  </div>
                  <p className="py-4 text-black">Share</p>
                  <div className="flex gap-3">
                    <FacebookShareButton
                      url="https://homifyestate-8556d.web.app/"
                      hashtag="#HomifyEstate"
                    >
                      <h1 className="text-black">
                        <FacebookIcon className="rounded-full w-[60px] h-[60px]"></FacebookIcon>
                      </h1>
                    </FacebookShareButton>

                    <TwitterShareButton
                      url="https://homifyestate-8556d.web.app/"
                      hashtag="#HomifyEstate"
                    >
                      <TwitterIcon className="rounded-full w-[60px] h-[60px]"></TwitterIcon>
                    </TwitterShareButton>

                    <LinkedinShareButton
                      url="https://homifyestate-8556d.web.app/"
                      hashtag="#HomifyEstate"
                    >
                      <LinkedinIcon className="rounded-full w-[60px] h-[60px]"></LinkedinIcon>
                    </LinkedinShareButton>

                    <WhatsappShareButton
                      url="https://homifyestate-8556d.web.app/"
                      hashtag="#HomifyEstate"
                    >
                      <WhatsappIcon className="rounded-full w-[60px] h-[60px]"></WhatsappIcon>
                    </WhatsappShareButton>

                    <EmailShareButton
                      url="https://homifyestate-8556d.web.app/"
                      hashtag="#HomifyEstate"
                    >
                      <EmailIcon className="rounded-full w-[60px] h-[60px]"></EmailIcon>
                    </EmailShareButton>

                    <TelegramShareButton
                      url="https://homifyestate-8556d.web.app/"
                      hashtag="#HomifyEstate"
                    >
                      <TelegramIcon className="rounded-full w-[60px] h-[60px]"></TelegramIcon>
                    </TelegramShareButton>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn  btn-error text-white">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>

            <p
              onClick={() => handelWhilist(properties)}>
              <FaRegHeart className=" bg-gray-400 hover:bg-orange-500  rounded-full text-3xl p-1 " />
            </p>          
          </div>
        </div>

        <div className="px-3  rounded-full bottom-[300px]  w-[110px] items-center ">
          <div className="text-white flex flex-col  gap-1 ">
            <p className=" bg-black hover:bg-orange-400 items-center text-center p-1 font-bold rounded">
              {properties?.property_status}
            </p>
            <p className=" bg-red-400 hover:bg-orange-400 items-center text-center p-1 rounded font-bold">
              Features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
