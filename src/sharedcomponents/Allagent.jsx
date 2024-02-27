import { IoHome } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/axiosPublic/useAxiosPublic";
const Allagent = () => {
    const [personInfos, setPersonInfos] = useState([]);
    console.log(personInfos);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const rensponse = await axiosPublic("/users/all/agent");
                const data = rensponse.data;
                setPersonInfos(data)
            }
            catch (error) {
                console.log(error, "error fetching");
            }
        }
        fetchData()
    }, [axiosPublic])


    return (
        <>
            <section
                className="bg-gray-100 mb-10  h-[320px] md:h-[400px] relative border-4 grid items-end"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 700px",
                    backgroundPosition: "center",
                    backgroundImage: "url(https://i.ibb.co/8PmVZMt/banner-bg.jpg)",
                }}
            >
                <div className=" opacity-80 text-black  z-10    w-full items-center text-center mb-[15%] absolute">
                    <h1 className=" text-5xl "> All Agent</h1>
                    <span className=" items-center flex  justify-center gap-1 text-SM mt-7">
                        {" "}
                        <IoHome></IoHome> Home .AGENTPROFILE
                    </span>
                </div>
            </section>
            <div>
                <div className="grid justify-center mb-12 px-5 mx-auto md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-2">
                    {
                        personInfos?.map((personInfo, index) =>
                            <div key={index} className="card  mx-auto xl:w-[320px] w-[375px] lg:w-[450px] mt-7 bg-white border">
                                <div className="group w-full  h-[300px] relative border-slate-500 overflow-hidden">
                                    <img
                                        src={personInfo.photoURL}
                                        alt=""
                                        className="w-full object-cover h-full rounded-t-md" />
                                    <div className="absolute top-0 right-full rounded-t-md w-full h-full group-hover:right-0 bg-[#29404788] backdrop-blur-[5px]  p-7 flex flex-col justify-center ">
                                        <div className=" items-center flex text-xl text-white text-center gap-5">
                                            <button className=" ml-[15%] rounded-full  hover:bg-orange-600 bg-orange-400 p-2 ">
                                                <Link to='https://twitter.com'><FaTwitter></FaTwitter></Link>
                                            </button>

                                            <button className="rounded-full bg-gray-300 p-2  hover:bg-gray-500 text-red-500 ">
                                                <Link to='https://facebook.com'><FaFacebook></FaFacebook></Link>
                                            </button>
                                            <button className=" rounded-full hover:bg-orange-600 bg-orange-400 p-2 ">
                                                <Link to='https://linkedin.com'><FaLinkedinIn></FaLinkedinIn></Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className=" mt-4 px-6 ">
                                    <Link to={`/agentProfiles/${personInfo?._id}`}><h2 className=" font-bold text-xl ">
                                        {personInfo?.name}
                                        <div className="badge badge-secondary ml-3 ">{personInfo?.personalInfo?.listing} listing</div>
                                    </h2></Link>
                                    <p className="font-medium">{personInfo?.role}</p>
                                    <hr className=" bg-black mt-3 " />
                                    <div className=" justify-start mt-3 mb-3">
                                        <div className="flex items-center gap-2 font-semibold">
                                            <MdCall></MdCall>
                                            <h3> {personInfo?.phone} </h3>
                                        </div>
                                        <div className=" overflow-hidden flex items-center gap-2 font-semibold">
                                            <h5>
                                                <BiLogoGmail></BiLogoGmail>
                                            </h5>
                                            {personInfo?.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    );
};

export default Allagent;