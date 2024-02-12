import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import UserTabil from "./UserTabil";
import { AuthContext } from "../../../utils/provider/AuthProvider";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
const UserProfile = () => {
  const axiosPublic = useAxiosPublic();
  const [userInfo, setUserInfo] = useState([]);
  // console.log(properties);


  const { user } = useContext(AuthContext);
  // console.log(user?.email)

  const handelsubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const phone = from.phone.value;
    const city = from.city.value;
    const country = from.country.value;
    const website = from.website.value;
    const photo = from.photo.value;
    const address = from.address.value;

    const allInfo = {
      name,
      phone,
      city,
      email: user?.email,
      address,
      website,
      photoURL:photo,
      country,
    };
  
    // console.log(allInfo);
   const res = await axiosPublic.patch(`/users/user/${user?.email}`,allInfo)
   const data = res.data;
   console.log(data)
   

  };
  useEffect(() => {
    const fetchData = async () => {
      if (user?.email) {
        try {
          const response = await axiosPublic.get(`/users/${user?.email}`);
          const data =  response.data;
          setUserInfo(data);
          console.log(data)
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [axiosPublic,user?.email]);



  return (
    <div className="bg-gray-200">
      <div className="w-full bg-gray-200 p-0 m-0  mx-auto px-8">
        <h1 className=" text-2xl mb-10  flex justify-center font-bold">
          Personalized Information
        </h1>

        
          <div
            key={userInfo._id}
            className="lg:flex mt-4  bg-slate-300  py-4 xl:flex md:flex  flex-row cursor-pointer gap-10  mb-5  relative justify-start"
          >
            <div className=" ml-3">
              <img
                src={userInfo.photoURL}
                alt=""
                className=" xl:w-[285px]  lg:w-[300px] md:w-[330px] w-[360px]"
              />
            </div>
            <div className=" px-5">
              <h1 className="xl:text-3xl text-2xl font-bold mt-1 ">
                {userInfo.name}
              </h1>
              <p className="text-[17px] flex gap-20  mt-4 ">
                <span className="font-semibold tex-[22px] mr-3 "> Email :</span>
                {userInfo.email}
              </p>
              <p className="text-[17px]  flex gap-20  mt-4 justify-start ">
                <span className="font-semibold tex-[22px] mr-2  ">Phone:</span>
                {userInfo.phone}
              </p>
              <p className="text-[17px] flex gap-20  mt-4 justify-start ">
                <span className="font-semibold tex-[22px] mr-7 "> City : </span>
                {userInfo.city}
              </p>
              <p className="text-[17px] flex gap-20  mt-4 justify-start ">
                <span className="font-semibold tex-[22px] "> Country:</span>
                {userInfo.country}
              </p>
              <p className="text-[17px] flex gap-20  mt-4 justify-start ">
                <span className="font-semibold tex-[22px] "> Address:</span>
                {userInfo.address}
              </p>
              {/* Icon link */}
              <div className="flex gap-5 md:flex-row mt-4">
                <button className="mt-4 mb-3 bg-yellow-300  hover:bg-yellow-500 p-1 py-2 px-2 ">
                  <FaFacebook></FaFacebook>
                </button>
                <button className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 px-2 ">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
                <button className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 px-2 ">
                  <FaTwitter></FaTwitter>
                </button>
                <button className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-500  p-1 py-2 px-2 ">
                  <FaInstagramSquare></FaInstagramSquare>
                </button>
              </div>
            </div>
          </div>
        
        

        {/* from start */}

        <div className=" w-full xl:mt-14 xl:w-[980px]  lg:w-[670px] md:w-[690px] sm:w-[367px]   px-1 ">
          {/* <h1 className="  font-bold"> Leave a Comment  </h1> */}

          <div className=" border px-4 py-3  bg-slate-300 ">
            <h1 className="text-2xl font-semibold"> Update Information </h1>
            <form onSubmit={handelsubmit}>
              <div className="mt-4 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2  grid text-center items-center justify-center gap-10 ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultValue={userInfo?.name}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    defaultValue={userInfo?.phone}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Website</span>
                  </label>
                  <input
                    name="website"
                    type="text"
                    placeholder="Website"
                    defaultValue={userInfo?.website}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    name="address"
                    type="text"
                    placeholder="Address"
                    defaultValue={userInfo?.address}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Country</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Address"
                    defaultValue={userInfo?.country}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    name="city"
                    type="text"
                    placeholder="Address"
                    defaultValue={userInfo?.city}
                    className="input input-bordered"
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
                    defaultValue={userInfo?.photoURL}
                    className="input items-center py-2 input-bordered"
                  />
                </div>
              </div>

              <button
                type="submit"
                className=" mt-4 font-semibold px-2 hover:bg-yellow-500 bg-yellow-400 w-[160px] h-12 mb-6 "
              >
                {" "}
                Update Information{" "}
              </button>
            </form>
          </div>

          <div className=" mt-9 border bg-slate-300 py-2 px-5 mb-7 ">
            <h1 className="text-2xl font-semibold mb-3"> Update password</h1>
            <div className="grid lg:grid-cols-3 grid-cols-2  gap-2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Corrent password</span>
                </label>
                <input
                  type="password"
                  placeholder="Corrent password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New password</span>
                </label>
                <input
                  type="password"
                  placeholder="New password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className=" flex justify-between items-center">
              <button className=" mt-4 font-semibold hover:bg-yellow-500 bg-yellow-400 w-[150px] h-12 mb-6 ">
                {" "}
                Update password{" "}
              </button>
              <p className="  text-3xl px-7 hover:text-orange-400 rounded-full ">
                {" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mx-auto justify-center bg-gray-200  ">
        <UserTabil></UserTabil>
      </div>
    </div>
  );
};

export default UserProfile;
