import { useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const AgentProperties = () => {
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
    <div className="w-full xl:w-[1000px] mx-auto overflow-x-auto bg-gray-100 px-2">
     <div className="flex justify-between mt-7 items-center px-4">
     <h1 className="text-xl font-bold mb-6 mt-3 "> My Properties </h1>
     <Link to={"/dashboard/addProperty"}>
     <button className=" xl:text-[17px] xl:font-semibold font-poppins xl:w-[170px]  py-2 border px-1 text-black  btn btn-warning  "> + Add Property</button>
    </Link>
     </div>
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
              <th>Purpose</th>
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
                  <button className="text-base md:text-xl font-medium font-serif w-full md:w-[70px] lg:w-[100px] xl:w-[120px]">
                    Sale
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

export default AgentProperties;


// export default ;