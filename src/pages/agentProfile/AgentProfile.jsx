import { useContext, useEffect, useState } from "react";
import { FaEdit, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
// import { FaEdit } from "react-icons/fa";
import { AuthContext } from './../../utils/provider/AuthProvider';
import useAxiosPrivate from './../../hooks/axiosPrivate/useAxiosPrivate';
import toast from "react-hot-toast";
import useAxiosPublic from './../../hooks/axiosPublic/useAxiosPublic';




const AgentProfile = () => {
  const [properties, setProperties] = useState([]);
  const [toggle, setToggle] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  // console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.email) {
        await axiosPrivate.get(`/users/${user?.email}`)
          .then(res => {
            setProperties(res.data);
            // console.log(res.data)
          });
      }
    };

    fetchData();
  }, [axiosPrivate, user,toggle]);
  const handelsubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value || user?.displayName;
    const phone = from.phone.value;
    const description = from.description.value||"";
    const photo = from.photo.value || user?.photoURL;

    const allInfo = {
      name,
      phone,
      email: user?.email,
      photoURL: photo,
      description
    };

    const res = await axiosPublic.patch(`/users/user/${user?.email}`, allInfo)
    const data = res.data;
    if(data.modifiedCount > 0){
     
      setToggle(!toggle);
    }
    console.log(data);
    toast.success("success full update")
  };

  return (
    <>
      {/* BANNER SECTION  */}

      {/* <section
        className="bg-gray-100 mb-20  h-[320px] md:h-[400px] relative border-4 grid items-end"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 700px",
          backgroundPosition: "center",
          backgroundImage: "url(https://i.ibb.co/8PmVZMt/banner-bg.jpg)",
        }}
      >
        <div className=" opacity-80 text-black  z-10    w-full items-center text-center mb-[15%] absolute">

          <h1 className=" text-5xl "> Personal Information </h1>
          
        </div>
      </section> */}

      {/* stactic card section  */}
      <h1 className=" text-3xl my-5 ml-12 font-semibold"> Personal Information: </h1>
      <div className="lg:flex xl:flex md:flex flex-row cursor-pointer gap-10  mb-5 px-7  justify-center">
        <div className="">
          <img src={properties?.photoURL} alt="" className=" xl:w-[380px] lg:w-[350px] md:w-[470px] w-[340px]  " />
          <div className="absolute xl:bottom-[240px] lg:bottom-[200px] md:bottom-[260px] bottom-[650px]  ml-7 text-xl ">
            <p className="mt-4 mb-3 bg-yellow-300  hover:bg-yellow-500 p-1 py-2 "> <FaFacebook></FaFacebook> </p>
            <p className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 "><FaLinkedinIn></FaLinkedinIn></p>
            <p className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 ">
              <FaTwitter></FaTwitter>
            </p>

          </div>
        </div>
        <div>
          <div className="">
            <div className="flex  items-center">
              <h1 className="text-2xl font-bold "> {properties?.name} </h1>
              <button className="btn btn-primary lg:ml-[23rem] md:[12rem] ml-[6rem] " onClick={() => document.getElementById('my_modal_5').showModal()}><span><FaEdit className="text-xl" /></span>Info</button>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <div className=" px-4 py-3 rounded-md ">
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold"> Update Information </h1>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="text-2xl "><IoCloseSharp /></button>
                      </form>
                    </div>
                  </div>
                  <form onSubmit={handelsubmit}>
                    <div className="mt-4 xl:grid-cols-2 lg:grid-cols-2 grid-cols-2  grid text-center items-center justify-center gap-10 ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          defaultValue={properties?.name}
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          
                          className="input input-bordered"
                          required
                        />
                      </div>


                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo</span>
                        </label>
                        <input
                          name="photo"
                          type="text"
                          placeholder="Photo"
                          className="input items-center py-2 input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Number</span>
                        </label>
                        <input
                          name="phone"
                          type="text"
                          className="input items-center py-2 input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="description" placeholder="Bio"></textarea>
                      </div>
                    </div>
                   
                    <button 
                      type="submit"
                      className=" mt-4 font-semibold px-2 hover:bg-yellow-500   rounded-sm bg-yellow-400 w-[180px] h-12 mb-6 "
                    >
                      Update Information{" "}
                    </button>
                  </form>
                </div>

              </div>
            </dialog>
          </div>

          <p className=" mt-3 uppercase font-medium"> {properties?.role} </p>

          <p className="text-[20px] font-semibold mt-5"> {properties?.description} </p>

          <h1 className=" text-2xl  font-bold my-5 "> Personalized Information</h1>

          <div className="xl:flex lg:flex flex-row gap-7 md:flex-row mt-2">
            <div className="flex gap-4">
              <p className=" flex items-center gap-3"> < MdOutlineMailOutline></MdOutlineMailOutline> {properties?.email} </p>
              <button className=" flex gap-1 items-center"> <MdOutlineLocalPhone></MdOutlineLocalPhone> (+088)582 - 45825 </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );

};

export default AgentProfile;