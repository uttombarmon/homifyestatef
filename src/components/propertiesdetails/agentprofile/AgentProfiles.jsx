import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
import { AuthContext } from "../../../utils/provider/AuthProvider";

const AgentProfiles = ({profile}) => {
    const axiosPublic =useAxiosPublic()
    const { userInfo }=useContext(AuthContext)
    const [userIn, setUserIn] = useState([]);
    console.log(userIn);

    const {contact} = profile
    const email= contact
    console.log(email);

    useEffect(() => {
        const fetchData = async () => {
          if (userInfo?.email) {
           const result = await axiosPublic.get(`/users/agentInfo/${userInfo?.email}?email=${email}`,{withCredentials:true})
           setUserIn(result.data);
           console.log(result);
          }
        };
        fetchData();
      }, [axiosPublic,userInfo,email]);

    return (
        <div className=" mt-10 mb-10  ">
            <div className="card xl:w-[400px] border-2 lg:w-[320px] md:w-[400px] w-[380px] font-poppins   shadow-lg">
                {/* imgaes */}
                <div className="avatar ">
                    <div className="w-32 mt-10 mx-auto rounded-full">
                        <img src={userIn?.photoURL} />
                    </div>
                </div>
                <div className="card-body items-center text">
                    <h2 className="card-title capitalize ">{userIn?.name}</h2>
                    <p className="text-[17px] ">{userIn?.email} </p>
                    <p className="text-[17px] text-start font-semibold ">Phone: {userIn?.phone} </p>
                    <p className="text-[15px] capitalize font-semibold ">{userIn?.role} Executive</p> 
                   <p> {userIn?.description} </p> 
                    <div >
                        <p className="capitalize text-center text-[15px] mt-5"> get contact </p>
                        <div className=" flex gap-5 text-2xl  mt-5 mb-4">
                        <FaFacebook className="hover:text-orange-500"></FaFacebook >  <FaLinkedinIn className="hover:text-orange-500"></FaLinkedinIn>   <FaTwitter className="hover:text-orange-500"></FaTwitter>  <FaInstagramSquare className="hover:text-orange-500"></FaInstagramSquare>
                        </div>
          
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentProfiles;