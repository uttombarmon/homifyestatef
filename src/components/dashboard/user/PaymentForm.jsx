import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../utils/provider/AuthProvider";

const PaymentForm = () => {
  const currentDate = new Date();
  const [property, setProperty] = useState(null);
  const axiosPublic = useAxiosPublic();
  const params = useParams();
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get(`/home/checkoutt/${params.id}`);
        const data = response.data;
        setProperty(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic, params]);

  const handlePaymentForm = (e) => {
    e.preventDefault();
    const totalAmount =
      parseInt(property?.property_details?.price) +
      (property?.property_details?.price * 5) / 100;
    console.log(property);
    const localTime = currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const localDate = currentDate.toISOString().split("T")[0];
    const form = e.target;
    const name = form.name.value;
    const company = form.company.value;
    const country = form.country.value;
    const street = form.street.value;
    const town = form.town.value;
    const zip = form.zip.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const allFormData = {
      company: `${company}`,
      localTime: `${localTime}`,
      localDate: `${localDate}`,
      totalAmount: `${totalAmount}`,
      name: `${name}`,
      address: `${zip}, ${town}, ${street}, ${country}`,
      phone: `${phone}`,
      email: `${email}`,
      message: `${message}`,
    };
    console.log(allFormData);
  };

  return (
    <div className="flex py-7 px-7 w-full">
      <form className="flex flex-wrap" onSubmit={handlePaymentForm}>
        {/* 1st div  */}
        <div className="w-2/3">
          <h2 className="font-semibold text-2xl pb-3">Billing Details</h2>
          <div>
            {/* name*/}
            <div className=" w-2/4">
              <div>
                <label className="font-medium">Name</label>
                <input
                  name="name"
                  readOnly
                  defaultValue={userInfo?.name}
                  type="text"
                  className="w-full p-2 mb-4 border rounded-md"
                />
              </div>
            </div>
            {/* company*/}
            <div className="w-2/4">
              <label className="font-medium">Company Name</label>
              <input
                name="company"
                type="text"
                className="w-full p-2 mb-4 border rounded-md"
              />
            </div>
            {/* Country/region*/}
            <div className="w-2/4">
              <label className="font-medium">Country/Region</label>
              <input
                readOnly
                defaultValue={userInfo?.country}
                name="country"
                className="w-full cursor-pointer p-2 mb-4 border rounded-md "
              />
            </div>

            {/* town/city*/}
            <div className="w-2/4">
              <label className="font-medium">Town/City</label>
              <input
                readOnly
                defaultValue={userInfo?.city}
                name="town"
                type="text"
                className="w-full p-2 mb-4 border rounded-md"
              />
            </div>

            {/* street address*/}
            <div className="w-2/4">
              <label className="font-medium">Street address</label>
              <input
                readOnly
                defaultValue={userInfo?.address}
                name="street"
                type="text"
                className="w-full p-2 mb-4 border rounded-md"
              />
            </div>
            {/* zip code*/}
            <div className="w-2/4">
              <label className="font-medium">Zip code</label>
              <input
                name="zip"
                type="text"
                className="w-full p-2 mb-4 border rounded-md"
              />
            </div>
            {/* phone*/}
            <div className="w-2/4">
              <label className="font-medium">Phone</label>
              <input
                readOnly
                defaultValue={userInfo?.phone}
                name="phone"
                type="text"
                className="w-full p-2 mb-4 border rounded-md"
              />
            </div>
            {/* email address*/}
            <div className="w-2/4">
              <label className="font-medium">Email Address</label>
              <input
                readOnly
                defaultValue={userInfo?.email}
                name="email"
                type="text"
                className="w-full p-2 mb-4 border rounded-md"
              />
            </div>
            {/* messages */}
            <div className="w-2/4">
              <label className="block mb-2 font-medium" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className="w-full p-2 mb-4 border rounded-md"
                required
              ></textarea>
            </div>
          </div>
        </div>

        {/* 2nd div  */}
        <div className="w-1/3 px-10 ">
          <div className="leading-10">
            <div className="flex justify-between ">
              <p className="font-semibold text-2xl">Product</p>
              <p className="font-semibold text-2xl">Subtotal</p>
            </div>

            <div className="flex justify-between">
              <p className="capitalize">{property?.title}</p>
              <p>{property?.property_details?.price} BDT</p>
            </div>

            <div className="flex justify-between">
              <p className="capitalize">Charge</p>
              <p>{(property?.property_details?.price * 5) / 100} BDT</p>
            </div>

            <div className="flex justify-between border-b pb-4 border-gray-300">
              <p className="text-xl font-medium text-[#B88E2F]">Total</p>
              <p className="text-xl font-medium text-[#B88E2F]">
                {parseInt(property?.property_details?.price) +
                  (property?.property_details?.price * 5) / 100}{" "}
                BDT
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="pb-4">
              Your personal data will used to support your experience throught
              this website, to manage access to your account,and for other
              purposes described in our
              <span className="font-bold text-blue-500 underline">
                {" "}
                privacy policy
              </span>
            </p>

            <button
              type="submit"
              className="text-white py-2 px-4 rounded-md bg-[#b89440] hover:bg-[#ad8321]"
            >
              Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
