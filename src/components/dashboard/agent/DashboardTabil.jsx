import { useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import "./btn.css"
const DashboardTabil = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../.././../../public/wishlist.json");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full xl:w-[980px]  overflow-x-auto bg-gray-100 px-2">
      <div className="table-responsive">
        <table className="w-full table">
          {/* head */}
          <thead className="h-[5px] bg-slate-200 border ">
            <tr className="text-xl font-semibold text-black">
              <th>
                <h1>Images</h1>
              </th>
              <th>
                <h1>Details</h1>
              </th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="px-6">
            {/* row 1 */}
            {properties?.map((property) => (
              <tr key={property.id} className="border ">
                <td className="w-full md:w-[150px] lg:w-[200px] xl:w-[200px] border">
                  <img
                    src={property.image}
                    alt="logo"
                    className="w-[120px] xl:h-[90px] md:h-24 lg:h-[100px] object-cover"
                  />
                </td>
                <td className="w-full md:w-[250px] lg:w-[350px] xl:w-[500px] border">
                  <h3 className="text-xl mb-1 lg:w-[180px] md:w-[180px] xl:w-[300px] w-[270px] font-semibold font-serif">
                    {property.name}
                  </h3>
                  <p className="text-[15px] mb-1 font-medium">
                    Posting date: {property.date}
                  </p>
                  <p className="font-medium">Review: {property.review}</p>
                </td>
                <td className="w-full md:w-[100px] lg:w-[150px] xl:w-[200px] border text-xl font-medium font-serif">
                  $ {property.price}
                </td>
                <td className="border">
                  <button className="text-base hidden btn bg-blue-100 text-green-400  md:text-xl font-medium font-serif w-full md:w-[70px] lg:w-[100px] xl:w-[120px]">
                   Approved
                  </button>
                  <button className=" hidden btn text-red-600 bg-blue-100 md:text-xl font-medium font-serif w-full md:w-[70px] lg:w-[100px] xl:w-[120px]">
                    Pending
                  </button>
                  <button className=" btn text-orange-600 bg-green-100  md:text-xl font-medium font-serif w-full md:w-[70px] lg:w-[100px] xl:w-[120px]">
                    Sold
                  </button>
                </td>
                <td className="border">
                  <button className="text-base md:text-xl font-medium font-serif w-full md:w-[90px] lg:w-[90px] xl:w-[110px]  items-center gap-2">
                    <span className="flex hover:text-orange-400 items-center gap-2">
                      <FaEdit /> Edit
                    </span>
                    
                    <span className="flex  hover:text-red-600 mt-2 items-center gap-2">
                      <RiDeleteBin7Line />  Delete
                    </span>
                   
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTabil;


