import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const AgentProfiles = () => {
    return (
        <div className=" mt-10 mb-10  ">
            <div className="card xl:w-[400px] border-2 lg:w-[320px] md:w-[400px] w-[380px] font-poppins   shadow-lg">
                {/* imgaes */}
                <div className="avatar ">
                    <div className="w-32 mt-10 mx-auto rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize ">Johen deo sing</h2>
                    <p className="text-[15px] ">Agent Executive</p>
                    <p> adipisicing elit. Quasi assumenda facilis enim atque sed, explicabo aperiam odit modi laudantium </p>
                    <div >
                        <p className="capitalize text-[15px] mt-5"> get contact </p>
                        <div className=" flex gap-5 text-xl mt-3 mb-4">
                        <FaFacebook></FaFacebook>  <FaLinkedinIn></FaLinkedinIn>   <FaTwitter></FaTwitter>  <FaInstagramSquare></FaInstagramSquare>
                        </div>
          
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentProfiles;