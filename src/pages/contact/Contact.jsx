import { IoHome } from "react-icons/io5";
import {
  BsFillChatSquareFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zt3es0s', 'template_ih4zkgp', form.current, {
        publicKey: '_M-Xno-tG5TitAcIS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


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
          <h1 className=" text-5xl "> Contact Us </h1>
          <span className=" items-center flex  justify-center gap-1 text-xl mt-7">
            <IoHome></IoHome> Home . Contact Us
          </span>
        </div>
      </section>

      <h1 className=" lg:text-2xl xl:text-3xl text-xl mb-7 font-bold text-center py-2 lg:py-5">
        Have Questions? CONTACT US
      </h1>
      <div className="xl:px-20 lg:px-16 md:py-5 md:px-4 px-3 py-6 bg-gray-200">
        <div className=" grid md:grid-cols-2 grid-cols-1 ">
          <div data-aos="fade-right">
            <div className=" ml-16 mb-3 lg:ml-1">
              <h2 className=" font-bold lg:text-2xl">Ask Our Team</h2>
              <p className=" mt-2 font-semibold">
                Want to contact us directly? No problem. <br />
                We are always here for you.
              </p>

              <div className="avatar-group mt-6 -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://i.ibb.co/LzWxcQc/assignment-helps-fbdf10d1.webp" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://i.ibb.co/7zn0Gc0/editing-help-service-d5ba1cce.webp" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://i.ibb.co/8NSMWkR/every-student-ment-f7a30282.webp" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="mt-9">
                <div className="flex mb-1  items-center gap-2">
                  <CiLocationOn className="font-bold text-xl text-black"></CiLocationOn>{" "}
                  <p className="  font-semibold">
                    {" "}
                    Bangladesh , Dhaka ,Rongpure{" "}
                  </p>
                </div>
                <div className="flex mb-1 items-center gap-2">
                  <BsFillTelephoneFill></BsFillTelephoneFill>
                  <p className="  font-bold"> 0177770077</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsFillEnvelopeFill></BsFillEnvelopeFill>
                  <h2>hrhridoyroy@gmail.com </h2>
                </div>

                <button className="btn mt-6 bg-green-500 btn-outline btn-secondary">
               
                  <span>
                    <BsFillChatSquareFill></BsFillChatSquareFill>
                  </span>
                  Start Live chart
                </button>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="w-full">
              <div className="card shrink-0  ">
                <form ref={form} onSubmit={sendEmail} >
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                    <div className="form-control">
                      <label className="label"></label>
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        className="input"
                       
                      />
                    </div>
                    <div className="form-control">
                      <label className="label"></label>
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        className="input"
                        required

                      />
                    </div>
                    <div className="form-control">
                      <label className="label"></label>
                      <input
                        type="text"
                        name="from_phone"
                        placeholder="Your Namber"
                        className="input"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label"></label>
                      <input
                        type="text"
                        name="from_subjcet"
                        placeholder="Subjcet"
                        className="input"

                 
                      />
                    </div>
                    <div className="form-control">
                      <label className="label"></label>                  
                      <textarea name="message" className="textarea textarea-bordered" 

                      placeholder="Write Message"></textarea>
                    </div>
                    <div className="form-control mt-6"></div>
                  </div>
                  <button
                  type="submit"
                    className="btn btn-primary w-full btn-outline mt-7 " >
                    Send Massagge
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default Contact;