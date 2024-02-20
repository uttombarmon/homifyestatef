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
import { useEffect, useState } from "react";
import { MdOutlineAccessTime, MdAdd, MdOutlineBathroom } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline, IoShareSocialOutline } from "react-icons/io5";
import { TbViewfinder } from "react-icons/tb";
import { FaRegHeart, FaCheckCircle } from "react-icons/fa";
import { LuClipboardCopy } from "react-icons/lu";
import GoogleMapComponent from "../../components/propertiesdetails/googlemap/GoogleMap";
import Reviews from "../../components/propertiesdetails/Review/Reviews";
import ScheduleForm from "../../components/propertiesdetails/shcedule/Schedule";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BannerSection from "../../components/propertiesdetails/bannerSection/bannerSection";
import PropertyVideo from "../../components/propertiesdetails/propertyVideo/propertyVideo";
const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const axiosPublic = useAxiosPublic();
  const params = useParams();
  const location = useLocation();
  // console.log(location);
  // this data is load from the db ;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get(`/home/checkout/${params.id}`);
        const data = response.data;
        setProperty(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic, params]);

  return (
    <>
      <Helmet>
        <title>{}</title>
        <meta property="og:title" content={property?.title} />
        <meta property="og:description" content={property?.description} />
        <meta property="og:image" content={property?.property_image} />
        <meta
          property="og:url"
          content={`https://homifyestate-8556d.web.app${location.pathname}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className=" bg-slate-100">
        {property ? (
          //    <div>
          //     {/* <ThumbsBanner></ThumbsBanner> */}
          //    </div>
          <div className="flex justify-between flex-wrap">
            {/* banner */}
            <BannerSection property={property} ></BannerSection>

            <div className="w-full md:w-7/12 flex flex-wrap mx-4 my-4">
              {/* title, price, location section */}
              <div className="flex bg-white flex-wrap w-full px-2 py-3">
                <div className=" w-full md:w-4/6">
                  <p className=" text-lg font-bold">{property.title}</p>
                  <p className="flex justify-between flex-wrap">
                    <span className=" flex self-center">
                      {" "}
                      <CiLocationOn className="self-center font-semibold" />{" "}
                      {property.location}
                    </span>
                    <span className=" self-center flex">
                      {" "}
                      <MdOutlineAccessTime className=" self-center" />{" "}
                      {property?.property_details?.date_listed}
                    </span>
                    <span className=" btn bg-yellow-300">
                      {property?.property_status}
                    </span>
                  </p>
                  <p className="flex justify-between md:justify-start flex-wrap">
                    <span className=" flex self-center md:mr-3">
                      <IoBedOutline className=" self-center" /> Beds:{" "}
                      {property?.property_details?.bed_rooms}
                    </span>
                    <span className=" flex self-center md:mr-3">
                      <MdOutlineBathroom className=" self-center" /> Baths:{" "}
                      {property?.property_details?.baths}
                    </span>
                    <span className=" flex self-center md:mr-3">
                      {" "}
                      <TbViewfinder className=" self-center" />{" "}
                      {property?.property_details?.size}
                    </span>
                  </p>
                </div>
                {/* share on social */}
                <div className=" w-full md:w-2/6 flex flex-wrap md:justify-end">
                  <div className=" w-full flex justify-start md:justify-end">
                    <span className="p-2 rounded-full border-[1px] border-black h-fit mr-2">
                      <FaRegHeart className="" />
                    </span>
                    <span className="p-2 rounded-full border-[1px] border-black h-fit mr-2">
                      <MdAdd className="" />
                    </span>
                    <div className="p-2 rounded-full border-[1px] border-black h-[34px] mr-2 hover:bg-orange-500 hover:text-white hover:border-none">
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        <IoShareSocialOutline />
                      </button>

                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg text-black text-center">
                            Share on Social Media
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
                              url={`https://homifyestate-8556d.web.app${location.pathname}`}
                              hashtag="#HomifyEstate"
                            >
                              <h1 className="text-black">
                                <FacebookIcon className="rounded-full w-[60px] h-[60px]"></FacebookIcon>
                              </h1>
                            </FacebookShareButton>

                            <TwitterShareButton
                              url={`https://homifyestate-8556d.web.app${location.pathname}`}
                              hashtag="#HomifyEstate"
                            >
                              <TwitterIcon className="rounded-full w-[60px] h-[60px]"></TwitterIcon>
                            </TwitterShareButton>

                            <LinkedinShareButton
                              url={`https://homifyestate-8556d.web.app${location.pathname}`}
                              hashtag="#HomifyEstate"
                            >
                              <LinkedinIcon className="rounded-full w-[60px] h-[60px]"></LinkedinIcon>
                            </LinkedinShareButton>

                            <WhatsappShareButton
                              url={`https://homifyestate-8556d.web.app${location.pathname}`}
                              hashtag="#HomifyEstate"
                            >
                              <WhatsappIcon className="rounded-full w-[60px] h-[60px]"></WhatsappIcon>
                            </WhatsappShareButton>

                            <EmailShareButton
                              url={`https://homifyestate-8556d.web.app${location.pathname}`}
                              hashtag="#HomifyEstate"
                            >
                              <EmailIcon className="rounded-full w-[60px] h-[60px]"></EmailIcon>
                            </EmailShareButton>

                            <TelegramShareButton
                              url={`https://homifyestate-8556d.web.app${location.pathname}`}
                              hashtag="#HomifyEstate"
                            >
                              <TelegramIcon className="rounded-full w-[60px] h-[60px]"></TelegramIcon>
                            </TelegramShareButton>
                          </div>
                          <div className="bg-white rounded-sm my-3 p-4 w-full ">
                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn  btn-error text-white">
                                  Close
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </dialog>
                    </div>
                    <span className="p-2 rounded-full border-[1px] border-black h-fit">
                      <LuClipboardCopy />
                    </span>
                  </div>
                  <br />
                  <p>{property?.property_details?.price}</p>
                </div>
              </div>
              {/* description section  */}
              <div className=" bg-white rounded-sm my-3 p-4 w-full">
                <h1 className=" text-xl font-bold">Description</h1>
                <p>{property?.description}</p>
              </div>
              {/* property details & facilities section  */}
              <div className=" bg-white rounded-sm my-3 p-4 w-full">
                <div>
                  <h1 className=" text-xl font-bold my-2">Property Details</h1>
                  <div className=" grid grid-cols-2 md:grid-cols-3 justify-between">
                    <p className="my-2">
                      <span className="font-semibold">Property Id:</span>{" "}
                      {property?.property_details?.id}
                    </p>
                    <p className="my-2">
                      <span className="font-semibold">Rooms:</span>{" "}
                      {property?.property_details?.rooms}
                    </p>
                    <p className="my-2">
                      <span className="font-semibold">Status:</span>{" "}
                      {property?.property_details?.status}
                    </p>
                    <p className="my-2">
                      <span className="font-semibold">Garages:</span>{" "}
                      {property?.property_details?.garages}
                    </p>
                    <p className="my-2">
                      <span className="font-semibold">Bed Rooms:</span>{" "}
                      {property?.property_details?.bed_rooms}
                    </p>
                    <p className="my-2">
                      <span className="font-semibold">Type:</span>{" "}
                      {property?.property_details?.type}
                    </p>
                    <p className="my-2">
                      <span className="font-semibold">Baths:</span>{" "}
                      {property?.property_details?.baths}
                    </p>
                    <p className="my-2">
                      <span className="font-semibold">Originting Year:</span>{" "}
                      {property?.property_details?.date_listed}
                    </p>
                    <p className="my-2">
                      <span className="font-semibold">Price:</span>{" "}
                      {property?.property_details?.price}
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className=" text-xl font-bold my-2">Facilities</h1>
                  <div className=" grid grid-cols-2 md:grid-cols-3 justify-between">
                    {property?.facilities?.map((face) => (
                      <p key={face} className="my-2 flex">
                        <FaCheckCircle className=" self-center text-green-400 mr-1" />{" "}
                        {face}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* floor design image  */}
              <div className=" bg-white rounded-sm my-3 p-4 w-full">
                <h1 className=" text-xl font-bold">Floor Plan</h1>
                <div>
                  <img src={property?.floor_plan?.image} alt="" />
                </div>
              </div>

              {/* property video  */}
              <div>
                <PropertyVideo embedId="AMYU_zfzRbc"></PropertyVideo>
              </div>

              {/* map location  */}
              <div className=" bg-white rounded-sm my-3 p-4 w-full">
                <h1 className=" text-xl font-bold">Map Location</h1>
                <div className=" w-full">
                  <GoogleMapComponent></GoogleMapComponent>
                </div>
              </div>

              {/* review section  */}
              <div className="bg-white rounded-sm my-3 p-4 w-full ">
                <Reviews id={params.id}></Reviews>
              </div>
            </div>

            {/* schedule */}
            <div className=" w-full lg:w-4/12 h-fit bg-white">
              <ScheduleForm
                price={property?.property_details?.price}
                id={property._id}
              ></ScheduleForm>
            </div>
          </div>
        ) : (
          <p>Not found data</p>
        )}
      </div>
    </>
  );
};

export default PropertyDetails;
