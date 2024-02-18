
import "./footers.css"
import { FaRegEnvelope } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

// ff

const Footer = () => {
    return (
        <>
            <ScrollToTop smooth width="41px" height="22px" top="250" color="green" />
            <footer>

                <div className="row">
                    <div className=" col">
                        <h1 className="flex items-center">
                            <img src=" https://i.ibb.co/pwm3CW1/416449616-351255101191909-731095575509226543-n-1.png" className=" w-[40%] h-[40%] " />
                            <p className="uppercase font-bold text-xl">Homify</p>
                        </h1>



                        <p> Revolutionize property management with our comprehensive Flat Booking & Real Estate Management solutions. We specialize in optimizing property transactions, ensuring seamless bookings, transparent communication, and efficient real estate operations</p>
                    </div>
                    <div className=" col">
                        <h3 className=" text-xl font-bold"> Office <div className="underline"> <span></span> </div> </h3>
                        <p> Dhanka Mirpure 10rod </p>
                        <p> Dhaka , PIN 503319 , Bangladesh </p>
                        <p className=" email"> hrhridoyroy503@gmail.com </p>
                    </div>
                    <div className=" col">
                        <h3 className=" text-xl  font-bold"> Links  <div className="underline"> <span></span> </div></h3>
                        <li> <a href=""  > Home</a></li>
                        <li> <a href=""> Services</a></li>
                        <li> <a href=""> About Us</a></li>
                        <li> <a href=""> Contacts</a></li>
                    </div>
                    <div className="col">
                        <h3 className=" text-xl font-bold"> NewsLetter  <div className="underline"> <span></span> </div> </h3>
                        <form >
                            <FaRegEnvelope className="envelop text-xl"></FaRegEnvelope>
                            <input type="email" className="ml-1" placeholder=" Enter you Email id " required />
                            <button type="submit"> <FaArrowRight className=" right  "></FaArrowRight> </button>
                        </form>
                        <div className="socal-icone flex gap-4 text-2xl  ">
                            <Link to={"https://www.facebook.com/hridayray.hriday.1/"}>  <ImFacebook className="  hover:bg-orange-500  "></ImFacebook> </Link>
                            <Link to={"https://www.instagram.com/hridayrayhriday/"}>   <FaInstagramSquare className="  hover:bg-orange-500  " >
                            </FaInstagramSquare>  </Link>
                            <Link to={"https://github.com/hridayroy19"}><FaGithub className="  hover:bg-orange-500  "> </FaGithub>   </Link>
                            <FaWhatsapp></FaWhatsapp>

                        </div>

                    </div>
                </div>
                <hr className="w-[90%] mx-auto " />
                <br />
                <p className="items-center text-center text-[18px]">Copyright © 2024 - All right reserved</p>
            </footer>
        </>
    );
};

export default Footer;