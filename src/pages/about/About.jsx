import { ImHome } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaSolarPanel } from "react-icons/fa";
import { FaWalkieTalkie } from "react-icons/fa6";
import { PiElevatorBold } from "react-icons/pi";
import { FaTv } from "react-icons/fa";
import { PiSwimmingPool } from "react-icons/pi";
import { LuCamera } from "react-icons/lu";
import Professionals from "../../components/homecomponents/professionals/Professionals";
import LetesNews from "../../components/homecomponents/letestNews/LetesNews";

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
        <div className=" grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 xl:px-7 justify-between items-center gap-7 ">
          {/* text left section  */}
          <div className=" px-14 text-end ">
            <h1 className=" xl:text-3xl lg:text-2xl font-bold  mb-4 text-end">
              We help clients buy and <br />
              sell houses since 2001
            </h1>
            <p className="text-end xl:text-xl lg:text-xl  mb-3 font-medium ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
              Fugit deleniti quasi autem doloremque modi soluta blanditiis
              <br />
              alias. Minus perspiciatis quod sed adipisci architecto deleniti?
              <br />
              Debitis architecto pariatur maiores eaque aspernatur laborum
              consequuntur, explicabo est quo fugiat velit, in sint quas?
            </p>
            {/*  icone use  */}
            <div className=" flex justify-end xl:gap-10 gap-5 font-bold text-xl mt-5 mb-3 text-end  ">
              <h4 className="flex xl:text-2xl lg:text-xl text-sm gap-3 items-center ">
                Buy a Home <BsGraphUpArrow></BsGraphUpArrow>
              </h4>
              <h4 className="flex xl:text-2xl lg:text-xl text-sm gap-3 items-center ">
                Sell your home <GiReceiveMoney></GiReceiveMoney>
              </h4>
            </div>
            <div className=" flex justify-end xl:gap-10 gap-6 font-bold xl:text-xl mb-3 text-end  ">
              <h4 className="flex xl:text-2xl lg:text-xl text-sm gap-3 items-center ">
                Free Photoshoot <ImHome></ImHome>
              </h4>
              <h4 className="flex xl:text-2xl lg:text-xl text-sm gap-3 items-center ">
                Free appraisal <FaRegCalendarAlt></FaRegCalendarAlt>
              </h4>
            </div>
            <button className=" btn btn-outline mt-5"> More Details </button>
          </div>
          {/* image section use three images */}
          <div className="flex justify-center px-3  items-center gap-6">
            <div className=" flex flex-col gap-5">
              <img
                src="../../../public/about/pexels-binyamin-mellish-106399.jpg"
                alt=""
              />
              <img
                src="../../../public/about/download (9).jpg"
                alt=""
              />
            </div>
            <div className="px-3 w-[900px] md:px-4">
              <img
                src="../../../public/about/download (10).jpg"
                alt="" className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="items-center   mt-10 text-center font-bold mb-10 lg:text-2xl text-xl">
          Discovery your ideal home based on amenities
        </h3>
        {/* prodcut button and icone  */}
        <div className="  grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 lg:ml-[10%] lg:w-[800px]  xl:w-[1000px] md:ml-16 md:w-[650px] xl:ml-[14%] w-[350px] ml-16 mx-auto  justify-center md:px-2  items-center text-center mt-4 gap-4">
          <p className=" py-2 hover:bg-orange-300 w-[125px]  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            CC Camera <LuCamera></LuCamera>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[125px]  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Solar Panel <FaSolarPanel></FaSolarPanel>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[160px]  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Walk in Closets <FaWalkieTalkie></FaWalkieTalkie>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[120px] ml-4  gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Elevator <PiElevatorBold></PiElevatorBold>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[155px] gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Swimming Pool <PiSwimmingPool></PiSwimmingPool>
          </p>
          <p className=" py-2 hover:bg-orange-300 w-[115px] ml-2 gap-2 items-center px-2 flex text-sm font-semibold bg-gray-300 rounded-full  ">
            Smart Tv <FaTv></FaTv>
          </p>
        </div>

        <div className="  grid xl:grid-cols-5 xl:w-[600px] lg:grid-cols-5 md:grid-cols-5 grid-cols-3 w-[320px]   md:w-[700px]  mx-auto mb-7 mt-10 justify-center  items-center text-center  gap-4">
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

        <h1 className="text-center border w-[150px] mb-16 items-center xl:ml-[45%] lg:ml-[40%] md:ml-[39%] ml-36 font-bold btn btn-outline justify-center flex ">
        
          Prowse Property
        </h1>
      </div>

      {/* profosonals section  */}
      <div className="mb-6">
        <Professionals></Professionals>
      </div>

      <div className="xl:grid-cols-2 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-36 mt-14 lg:px-20 xl:px-28 p-9 items-center justify-center ">
        {/* review section  */}
        <div className=" justify-end   ">
          <h3 className="underline mb-2 font-semibold "> Client Feedback </h3>
          {/* reating */}
          {/* <div className=" justify-end items-end text-end mb-2" >
            <p className="rating checked:2" defaultChecked>
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
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </p>
          </div> */}

<div className="justify-end items-end text-end mb-2">
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
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit <br />
            nobis maiores deleniti, magni pariatur quibusdam vero, quos sred
            hkek <br />
            perspiciatis labore molestiae nostrum minus? <br />
            Ab ratione dolor corporis, ullam tempore odit.
          </p>
        </div>

        {/* feedback form */}

        <div>
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

      <LetesNews></LetesNews>
    </>
  );
};

export default About;
