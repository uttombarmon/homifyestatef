import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { AuthContext } from "../../../utils/provider/AuthProvider";
import useAxiosPrivate from "../../../hooks/axiosPrivate/useAxiosPrivate";
import toast from "react-hot-toast";
import { UsePhoto } from "../../../hooks/imageHosting/ImageHosting";
import { Link } from "react-router-dom";
import './scrollbarHide.css'

const UserProfile = () => {
  const axiosPrivate = useAxiosPrivate();
  const { userInfo } = useContext(AuthContext);
  const [isChecked, setChecked] = useState(false)

  const handelsubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const imgloc = from.photo.files[0];
    console.log(imgloc);
    const img = await UsePhoto(imgloc);
    console.log(img);
    const name = from.name.value;
    const phone = from.phone.value;
    const city = from.city.value;
    const country = from.country.value;
    const website = from.website.value;
    const address = from.address.value;

    const allInfo = {
      name,
      phone,
      city,
      email: userInfo?.email,
      address,
      website,
      photoURL: img,
      country,
    };
    const res = await axiosPrivate.patch(`/users/user/${userInfo?.email}`, allInfo)
    const data = res.data;
    console.log(data);
    toast.success("success full update")
  };
  const handleCheckboxChange = () => {
    setChecked(!isChecked)
  }
  return (
    <div className="bg-[#f2f2ec7d] overflow-x-hidden font-poppins ">
      <div className="w-full p-0 m-0  mx-auto px-2">
        <h1 className=" text-3xl mb-10 mt-2 flex justify-center font-bold">
          Personalized Information
        </h1>

        {/* agent request button  */}
        <div className=" w-full overflow-hidden justify-end text-end">
          {/* <Link to={'/dashboard/tobeagent'} className="btn bg-yellow-300">Be a Agent</Link> */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn bg-yellow-300" onClick={() => document.getElementById('my_modal_5').showModal()}>Be a Agent</button>
          <dialog id="my_modal_5" className=" scrollbar-hide text-start modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-xl text-center">Terms & Agreement</h3>
              <div className="max-w-3xl mx-auto px-4 py-8">
                <p className="mb-4">
                  These Agreement are an agreement between the real estate agency
                  &quot;HomifyEsate&quot; and the individual agent who wishes
                  to be affiliated with the Company as an independent contractor.
                </p>
                <h2 className="text-lg font-semibold mb-2">1. Agreement</h2>
                <p className="mb-4">
                  By signing up to become an agent with our real estate agency, you agree to comply with these terms and conditions.
                  This Agreement constitutes the entire agreement between the Company and the Agent and supersedes all prior agreements and understandings.
                </p>
                <h2 className="text-lg font-semibold mb-2">2. Agent Status</h2>
                <p className="mb-4">
                  2.1 The Agent acknowledges and agrees that they are an independent contractor and not an employee of the Company.
                </p>
                <p className="mb-4">
                  2.2 The Agent is responsible for all taxes, insurance, and other expenses associated with their work as an independent contractor.
                </p>
                <h2 className="text-lg font-semibold mb-2">3. Duties and Responsibilities</h2>
                <p className="mb-4">
                  3.1 The Agent agrees to act in good faith and with honesty and integrity at all times.
                </p>
                <p className="mb-4">
                  3.2 The Agent agrees to comply with all applicable laws, regulations, and ethical standards related to real estate transactions.
                </p>
                <h2 className="text-lg font-semibold mb-2">4. Compensation</h2>
                <p className="mb-4">
                  4.1 The Agent&apos;s compensation shall be based on commissions earned from successful real estate transactions.
                </p>
                <p className="mb-4">
                  4.2 The specific commission rates and payment terms shall be outlined in a separate commission agreement between the Company and the Agent.
                </p>
                <h2 className="text-lg font-semibold mb-2">5. Confidentiality</h2>
                <p className="mb-4">
                  5.1 The Agent agrees to maintain the confidentiality of all confidential information obtained during the course of their work as an agent,
                  including client information, business strategies, and proprietary information of the Company.
                </p>
                <h2 className="text-lg font-semibold mb-2">6. Termination</h2>
                <p className="mb-4">
                  6.1 Either party may terminate this Agreement at any time for any reason by providing written notice to the other party.
                </p>
                <p className="mb-4">
                  6.2 Upon termination of this Agreement, the Agent shall immediately cease representing themselves as an agent of the Company and return any Company property or materials in their possession.
                </p>
                <h2 className="text-lg font-semibold mb-2">7. Miscellaneous</h2>
                <p className="mb-4">
                  7.1 This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction].
                </p>
                <p className="mb-4">
                  7.2 Any disputes arising under this Agreement shall be resolved through arbitration in [Jurisdiction].
                </p>
                <h2 className="text-lg font-semibold mb-2">8. Acceptance</h2>
                <p className="mb-4">
                  By signing below, the Agent acknowledges that they have read, understood, and agreed to these terms and conditions.
                </p>
                <label htmlFor="checkbox" className="justify-start flex font-poppins text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    className="checkbox checkbox-xs mr-1 checkbox-warning"
                    onChange={handleCheckboxChange}
                  /> <span className=" self-center">Understand our agreement</span>
                </label>
              </div>
              <div className="modal-action">
                <Link to={'/dashboard/tobeagent'} className={`btn bg-yellow-300 ${isChecked ? '' : 'btn-disabled'}`}>Agree</Link>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-neutral">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        {/* profile card  */}

        <div className="lg:flex mt-4 rounded-md w-[calc(100%-2px)] mx-auto bg-slate-300  py-4 xl:flex md:flex  flex-row cursor-pointer gap-10  mb-5  relative justify-start">
          <div className=" ml-3 xl:h-[320px] lg:h-[300px]  ">
            <img
              src={userInfo?.photoURL}
              alt=""
              className=" xl:w-[270px] md:h-full mx-auto rounded-full md:rounded-none lg:rounded-none lg:w-[300px] md:w-[330px] w-[150px] text-center"
            />
          </div>
          <div className=" px-3">
            <h1 className=" text-2xl font-bold mt-1 ">
              {userInfo?.name}
            </h1>
            <p className="flex gap-20  mt-4 ">
              <span className="font-semibold mr-3 "> Email:</span>
              {userInfo?.email}
            </p>
            <p className="flex gap-20  mt-4 justify-start ">
              <span className="font-semibold mr-2  ">Phone:</span>
              {userInfo?.phone}
            </p>
            <p className="flex gap-20  mt-4 justify-start ">
              <span className="font-semibold mr-7 "> City : </span>
              {userInfo?.city}
            </p>
            <p className="text-[17px] flex gap-20  mt-4 justify-start ">
              <span className="font-semibold "> Country:</span>
              {userInfo?.country}
            </p>
            <p className="text-[17px] flex gap-20  mt-4 justify-start ">
              <span className="font-semibold "> Address:</span>
              {userInfo?.address}
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

        <div className=" xl:mt-14   w-[calc(100%-2px)] mx-auto px-1 ">
          {/* <h1 className="  font-bold"> Leave a Comment  </h1> */}

          <div className=" border px-4 py-3 rounded-md bg-[#eaebe5dd] ">
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
                    required
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
                <div className="form-control border-0">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  {/* <input
                    accept="image/*"
                    name="photo"
                    type="file"
                    placeholder="Photo"
                    defaultValue={userInfo?.photoURL}
                    className="input items-center py-2 input-bordered"
                  /> */}
                  <input type="file" accept="image/*" name="photo" className="file-input  file-input-info w-full max-w-xs" />
                </div>
              </div>

              <button
                type="submit"
                className=" mt-4 font-semibold px-2 hover:bg-yellow-500   rounded-md bg-yellow-400 w-[180px] h-12 mb-6 "
              >
                Update Information
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
              <button className="  rounded-md mt-4 font-semibold px-2 hover:bg-yellow-500 bg-yellow-400 w-[170px] h-12 mb-6 ">
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
