import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { AuthContext } from "../../../utils/provider/AuthProvider";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
import toast from "react-hot-toast";
const UserProfile = () => {
  const axiosPublic = useAxiosPublic();
  const [properties, setProperties] = useState(null);
  console.log(properties);

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
      photoURL: photo,
      country,
    };

    // console.log(allInfo);
    const res = await axiosPublic.patch(`/users/user/${user?.email}`, allInfo);
    const data = res.data;
    toast.success("success full update");
    console.log(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (user?.email) {
        try {
          const response = await axiosPublic.get(`/users/${user?.email}`);
          setProperties(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [axiosPublic, user?.email]);

  return (
    <div className="bg-[#f2f2ec7d] font-poppins ">
      <div className="w-full p-0 m-0  mx-auto px-8">
        <h1 className=" text-2xl mb-10  flex justify-center font-bold">
          Personalized Information
        </h1>
        <div className="lg:flex mt-4 shadow-xl rounded-md bg-slate-300  py-4 xl:flex md:flex  flex-row cursor-pointer gap-10  mb-5  relative justify-start">
          <div className=" ml-3">
            <img
              src={properties?.photoURL}
              alt=""
              className="  xl:rounded-full  lg:w-[300px] lg:h-[300px] h-[330px] rounded-lg px-3 mb-2 w-[100%]  ]"
            />
          </div>
          <div className=" px-5">
            <h1 className="xl:text-3xl text-2xl font-bold mt-1 ">
              {properties?.name}
            </h1>
            <p className="text-[17px] flex gap-20 mt-4 ">
              <span className="font-semibold tex-[22px] mr-3 "> Email :</span>
              {properties?.email}
            </p>
            <p className="text-[17px]  flex gap-20  mt-4 justify-start ">
              <span className="font-semibold tex-[22px] mr-2  ">Phone:</span>
              {properties?.phone}
            </p>
            <p className="text-[17px] flex gap-20  mt-4 justify-start ">
              <span className="font-semibold tex-[22px] mr-7 "> City : </span>
              {properties?.city}
            </p>
            <p className="text-[17px] flex gap-20  mt-4 justify-start ">
              <span className="font-semibold tex-[22px] "> Country:</span>
              {properties?.country}
            </p>
            <p className="text-[17px] flex gap-20  mt-4 justify-start ">
              <span className="font-semibold tex-[22px] "> Address:</span>
              {properties?.address}
            </p>
            {/* Icone link */}
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

        {/* frome start */}

        <div className=" xl:mt-14   w-[calc(100%-20px)] mx-auto px-1 ">
          {/* <h1 className="  font-bold"> Leave a Comment  </h1> */}

          <div className=" border px-4 py-3 bg-[#eaebe5dd] ">
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
                    className="input input-bordered"
                    required
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
                    className="input items-center py-2 input-bordered"
                  />
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

          <div className=" mt-9 border bg-[#eaebe5dd]  py-2 px-5 mb-7 ">
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
              <button className="  rounded-sm mt-4 font-semibold px-2 hover:bg-yellow-500 bg-yellow-400 w-[170px] h-12 mb-6 ">
                Update password
              </button>
              <p className="  text-3xl px-7 hover:text-orange-400 rounded-full "></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
