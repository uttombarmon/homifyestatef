
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
import { AuthContext } from "../../../utils/provider/AuthProvider";

const AgentOderList = () => {
  const [properties, setProperties] = useState([]);
  console.log(properties);
  const axiosPublic = useAxiosPublic()
  const { userInfo } = useContext(AuthContext);
  useEffect(() => {
    axiosPublic.get(`/agent/orderdata/${userInfo?.email}`)
      .then(e => setProperties(e.data))
      .catch(e => console.log(e))
  }, [axiosPublic, userInfo]);

  return (
    <div className=" w-full mx-auto px-4 overflow-x-auto">
      <div className="">
        <h1 className="text-xl text-center underline font-extrabold  mb-6 ml-4 mt-3"> Agent Order</h1>
        {
          properties.length > 0 ?
            <div className="overflow-x-auto px-3">
              <table className="table text-center table-xl">
                <thead>
                  <tr className="xl:text-xl text-[17px] border border-black bg-[#e6e7e6a8] text-black">
                    <th className="border text-center">Transection Id</th>
                    <th className="border text-center">Property Name</th>
                    <th className="border">Buyer Mail</th>
                    <th className="border">Date</th>
                    <th className="border">Price</th>
                  </tr>
                </thead>
                {properties?.map((propertie) => (
                  <tbody
                    key={propertie?.transectionId}
                    className="text-black border cursor-pointer  xl:text-[17px] font-medium "
                  >
                    <tr>
                      <td className="text-center border-gray-400  border">
                        {propertie?.transectionId}
                      </td>
                      <td className="text-center border-gray-400  border">
                        {propertie?.property?.title}
                      </td>
                      <td className=" font-serif border-gray-400 xl:text-[22px] border">
                        {propertie?.email}
                      </td>
                      <td className=" font-poppins border-gray-400   border">
                        {propertie?.date}
                      </td>
                      <td className=" font-thin border-gray-400  border">
                        {propertie?.amount}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            :
            <div className=" h-screen flex justify-center">
              <p className="font-bold text-2xl self-center" >Not found any data!</p>
            </div>
        }
      </div>
    </div>
  );
};

export default AgentOderList;




