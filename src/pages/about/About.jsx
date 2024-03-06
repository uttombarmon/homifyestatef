import { IoHome } from "react-icons/io5";
import { FaSolarPanel } from "react-icons/fa";
import { FaWalkieTalkie } from "react-icons/fa6";
import { PiElevatorBold } from "react-icons/pi";
import { FaTv } from "react-icons/fa";
import { PiSwimmingPool } from "react-icons/pi";
import { LuCamera } from "react-icons/lu";
import LetesNews from "../../components/homecomponents/letestNews/LetesNews";
// import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import Contact from "../../components/homecomponents/contact/Contact";

const About = () => {
  return (
    <>
      <section
        className="bg-gray-100 mb-10  h-[420px]  relative border-4 grid items-end"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 700px",
          backgroundPosition: "center",
          backgroundImage: "url(https://i.ibb.co/8PmVZMt/banner-bg.jpg)",
        }}
      >
        <div className=" opacity-80 text-black  z-10    w-full items-center text-center mb-[15%] absolute">
          <h1 className=" text-5xl "> About Us </h1>
          <span className=" items-center flex  justify-center gap-1 text-xl mt-7">
            About Us Home . <IoHome></IoHome>
          </span>
        </div>
      </section>

      {/* text and image section start */}

      <div className="mt-6">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8 lg:px-20 px-6 ">
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img
              src="https://i.ibb.co/NLq9Lth/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg"
              alt="image"
              className=" w-full"
            />
          </div>
          <div data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="300">
            <h2 className="text-2xl font-serif mb-4">
              {" "}
              <span className="font-bold">ABOUT</span>HOMIFY{" "}
            </h2>
            <hr className=" w-[80px] mb-3 " />
            <p className=" mb-5 font-medium">
              {" "}
              Welcome to Homify Estate - Your Trusted Partner in Real Estate
              Management!
            </p>
            <p className=" mb-4 text-gray-500 ">
              At Homify Estate , we pride ourselves on being more than just a
              real estate management platform; we are your dedicated partner in
              navigating the dynamic world of real estate. Whether your a
              property buyer, seller, investor, or tenant, our mission is to
              simplify and elevate your real estate experience.,
            </p>
            <p className=" text-gray-500">
              vis ei erroribus similique.Cum saepe disputationi in. Id mentitum
              perpetua mnesarchum per. Ne vix odio dicit numquam, audiam inermis
              eu nam.
            </p>
          </div>
        </div>
        {/* foure coards
         */}

        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-11 mb-8 lg:px-20 px-6 w-full gap-8 mx-auto lg:grid-cols-2 items-center" data-aos="fade-down" data-aos-duration="600">
          {/*  fast card */}
          <div className=" flex gap-6 border-2 py-2 px-4 " >
            <p className="mt-2 text-4xl  ">
              <IoMdCheckmark className=" bg-green-500 rounded-full p-1 text-white">
                {" "}
              </IoMdCheckmark>
            </p>
            <div className="font-thin">
              <h3 className="text-xl font-medium"> LARGEST COMMUNITY</h3>
              <p className=" mt-2 mb-2">
                {" "}
                Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do
                lilae eiusmod at tempor.
              </p>
            </div>
          </div>
          <div className=" flex gap-6 border-2 py-2 px-4 ">
            <p className="mt-2 text-4xl  ">
              <IoMdCheckmark className=" bg-green-500 rounded-full p-1 text-white">
                {" "}
              </IoMdCheckmark>
            </p>
            <div className="font-thin">
              <h3 className="text-xl font-medium">24 HOURS SERVICE</h3>
              <p className=" mt-2 mb-2">
                {" "}
                Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do
                lilae eiusmod at tempor.
              </p>
            </div>
          </div>
          <div className=" flex gap-6 border-2 py-2 px-4 ">
            <p className="mt-2 text-4xl  ">
              <IoMdCheckmark className=" bg-green-500 rounded-full p-1 text-white">
                {" "}
              </IoMdCheckmark>
            </p>
            <div className="font-thin">
              <h3 className="text-xl font-medium">LIFETIME SUPPORT</h3>
              <p className=" mt-2 mb-2">
                {" "}
                Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do
                lilae eiusmod at tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="600">
        <h3 className="items-center   mt-10 text-center font-bold mb-10 lg:text-2xl text-xl">
          Discovery your ideal home based on amenities
        </h3>
        {/* prodcut button and icone  */}
        <div className=" grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 md:px-7 lg:px-20 px-4 lg:gap-7 gap-2 w-full mx-auto ">
          <p className=" py-2 hover:bg-orange-300 w-[125px]  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            CC Camera <LuCamera></LuCamera>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[125px]  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Solar Panel <FaSolarPanel></FaSolarPanel>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[133px]  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Walk Closets <FaWalkieTalkie></FaWalkieTalkie>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[106px] ml-4  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Elevator <PiElevatorBold></PiElevatorBold>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[140px] gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Swimming Pol <PiSwimmingPool></PiSwimmingPool>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[115px] ml-2 gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Smart Tv <FaTv></FaTv>
          </p>
        </div>

        <div className="  flex flex-row justify-center mt-8 gap-10 mb-10 w-full mx-auto">
          <p className=" py-2 hover:bg-orange-300  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Jacuzzi <PiSwimmingPool></PiSwimmingPool>
          </p>
          <p className=" py-2 hover:bg-orange-300  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Garden <PiSwimmingPool></PiSwimmingPool>
          </p>
          <p className=" py-2 hover:bg-orange-300   gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Fireplece <PiSwimmingPool></PiSwimmingPool>
          </p>
          <p className=" py-2 hover:bg-orange-300   gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Garage <PiSwimmingPool></PiSwimmingPool>
          </p>
          <p className=" py-2 hover:bg-orange-300   gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            fireplace <PiSwimmingPool></PiSwimmingPool>
          </p>
        </div>
        <h1 className="text-center border w-[170px] mb-5 items-center xl:ml-[45%] lg:ml-[40%] md:ml-[39%] ml-36 font-bold btn btn-outline justify-center flex ">
          Browse Property
        </h1>
      </div>

      <div className="xl:grid-cols-2 bg-gray-300 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-36 mt-14 lg:px-20 xl:px-28 p-9 items-center justify-center ">
        {/* review section  */}
        <div className=" justify-end " data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h3 className="underline mb-2 font-semibold "> Client Feedback </h3>

          <div className="justify-end items-end text-end mb-2" >
            <p className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </p>
          </div>
          <p className=" mb-2 border-r">
            I had a fantastic experience using RealEstateManagementSite.com. The user-friendly interface, robust search, and seamless communication made selling my property a breeze. Secure transactions, digital paperwork, and excellent customer support set this platform apart. Highly recommended for a smooth real estate journey!
          </p>
        </div>

        {/* feedback form */}

        <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
          <h1 className=" text-end xl:text-3xl lg:text-2xl text-xl font-bold justify-end flex">
            Feedback From <br />
            .Satisfied Customers
          </h1>

          <div className=" text-end mt-5 ">
            <h3> Douglas Lyphe</h3>
            <p> operation Manage Static Main</p>
          </div>
          {/* profile logo */}
          <div className=" flex mb-5 gap-6   text-end justify-end mt-14">
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-6">
        <Contact></Contact>
      </div>
      <LetesNews></LetesNews>
    </>
  );
};

export default About;
// update
