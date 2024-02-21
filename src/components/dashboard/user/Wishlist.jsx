import { useContext, useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

import { AuthContext } from "../../../utils/provider/AuthProvider";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const axiosPublic = useAxiosPublic();
  const [properties, setProperties] = useState([]);

  // pagination
  const { user } = useContext(AuthContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages based on the number of items and itemsPerPage
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = properties?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`btn btn-outline border-none bg-blue-100 text-black font-medium mx-2 ${
            currentPage === i ? "bg-blue-300" : ""
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  // data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get(`/wish-lists/${user?.email}`);
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic, user?.email]);

  //  delte api

  const handelDelete = (id) => {
    axiosPublic
      .delete(`/wish-lists/${id}`)
      .then((e) => {
        if (e.data.deletedCount > 0) {
          toast.success("seccess full delete wishlist");
          const filterData = properties.filter((d) => d._id !== id);
          setProperties(filterData);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="w-full h-[100vh] mx-auto overflow-x-auto bg-[#f2f8b85b] px-2">
        <h1 className="text-2xl font-bold mb-6 mt-3 text-center"> Wishlist </h1>
        <div className="table-responsive">
          <table className="w-full border-4 table">
            {/* head */}
            <thead className="h-[5px] bg-slate-200 border-4 ">
              <tr className="text-xl font-semibold text-black">
                <th>
                  <h1>Images</h1>
                </th>
                <th>
                  <h1>Name</h1>
                </th>
                <th>Price</th>
                <th>Purpose</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="px-6">
              {/* row 1 */}
              {currentItems?.map((property) => (
                <tr key={property._id} className=" bg-[#bdc98e1c]  ">
                  <td className="w-full md:w-[100px] lg:w-[100px] xl:w-[150px] border-4">
                    <img
                      src={property.image}
                      alt="logo"
                      className="w-[150px] h-14 object-cover"
                    />
                  </td>
                  <td className="w-full md:w-[250px] lg:w-[350px] xl:w-[300px] border-4">
                    <h3 className="text-xl mb-1 lg:w-[180px] md:w-[180px] xl:w-[300px] w-[270px]">
                      {property.name}
                    </h3>
                  </td>
                  <td className="w-full md:w-[100px] lg:w-[150px] xl:w-[170px] border-4 text-xl">
                    $ {property?.price}
                  </td>
                  <td className="border-4">
                    <button className="text-base  md:text-xl w-full md:w-[70px] lg:w-[100px] xl:w-[150px]">
                      Sale
                    </button>
                  </td>
                  <td className="border-4 flex gap-2">
                    <button
                      onClick={() => handelDelete(property._id)}
                      className=" border-2 bg-red-400 gap-1 hover:bg-red-600 btn my-0 w-[90px] px-1 text-[17px]  flex items-center"
                    >
                      <span>
                        <RiDeleteBin7Line />
                      </span>
                      Delete
                    </button>
                    <br />
                    <Link to={`/dashboard/makeOffer/${property.propety}`}>
                      <button className=" border-2 bg-[#87e2639b]  hover:bg-green-600 my-0 btn-md btn  text-[17px] text-center px-1">
                        Make offer
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className=" flex  text-center mt-[40vh] items-center mb-10  w-full mx-auto justify-center  gap-5">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn bg-orange-300 text-black font-medium w-20"
        >
          Previous
        </button>
        <div className="flex space-x-2">{renderPageNumbers()}</div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= properties.length}
          className="btn bg-green-300 font-medium w-20"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Wishlist;
