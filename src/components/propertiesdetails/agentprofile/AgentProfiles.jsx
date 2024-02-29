import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const AgentProfiles = ({profile}) => {
    const {name,contact,phone} = profile
    console.log(name);
    return (
        <div className=" mt-10 mb-10  ">
            <div className="card xl:w-[400px] border-2 lg:w-[320px] md:w-[400px] w-[380px] font-poppins   shadow-lg">
                {/* imgaes */}
                <div className="avatar ">
                    <div className="w-32 mt-10 mx-auto rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="card-body items-center text">
                    <h2 className="card-title capitalize ">{name}</h2>
                    <p className="text-[14px] ">{contact} </p>
                    <p className="text-[14px] text-start ">Phone: {phone} </p>
                    <p className="text-[15px] ">Agent Executive</p>
                    {/* <p> adipisicing elit. Quasi assumenda facilis enim atque sed, explicabo aperiam odit modi laudantium </p> */}
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