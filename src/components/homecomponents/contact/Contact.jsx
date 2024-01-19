import { MdCall } from "react-icons/md";
const Contact = () => {
    return (
      <div className=" mx-auto items-center py-5 bg-gray-100 ">
        <div className=" grid md:grid-cols-2  grid-cols-1 justify-between lg:p-20 p-10 gap-9 items-center text-center ">
          <div  className=" items-center text-center">
            <h1 className=" lg:text-2xl text-xl font-bold text-black mb-1"> Need help? Talk to out Expert .</h1>
            <p className=" font-semibold text-sm">
               Talk to out experts or Browse through more properties
            </p>
          </div>
          <div className="">
                  <buttton className="btn uppercase hover:bg-orange-400 btn-outline mb-2 mr-4"> contact Us</buttton>
                  <buttton className="btn uppercase btn-outline text-white bg-black "> <MdCall></MdCall> 920 850 5256 </buttton>

          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;