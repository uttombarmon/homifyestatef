
import  "./Footer.css"
import { FaRegEnvelope } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



const Footer = () => {
    return (
        
        <footer>
            
         <div className="row">
            <div className=" col">
                <h1 className="flex items-center">
                <img src=" https://i.ibb.co/pwm3CW1/416449616-351255101191909-731095575509226543-n-1.png" className=" w-[40%] h-[40%] "  /> 
                <p className="uppercase font-bold text-xl">Homify</p>
                </h1>
                


                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat corporis incidunt voluptates, reprehenderit quas sunt placeat ipsa nemo ad voluptas doloribus dolor aut necessitatibus! Amet, ut! Assumenda, recusandae molestias!</p>
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
                 
        
                 <ImFacebook></ImFacebook>
                  <FaInstagramSquare ></FaInstagramSquare>
                  <FaGithub></FaGithub>
                  <FaWhatsapp></FaWhatsapp>

                </div>

            </div>
         </div>
         <hr  className="w-[90%] mx-auto "/>
         <br />
         <p className="items-center text-center text-[18px]">Copyright © 2024 - All right reserved</p>
        </footer>
    );
};

export default Footer;