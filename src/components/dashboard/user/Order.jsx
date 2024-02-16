import { useContext, useEffect, useState } from "react";
import useAxiosPrivate from "../../../hooks/axiosPrivate/useAxiosPrivate";
import { AuthContext } from "../../../utils/provider/AuthProvider";
import { Link } from "react-router-dom";

const Order = () => {
  const [properties, setProperties] = useState([]);
  // console.log(properties);

  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useContext(AuthContext)
  const axiosPrivate = useAxiosPrivate()
  const itemsPerPage = 7;

  // Calculate total pages based on the number of items and itemsPerPage
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = properties.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`btn btn-outline border-none bg-blue-100 text-black font-medium mx-2 ${currentPage === i ? "bg-blue-300" : ""
            }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get(`/order/user?email=${user?.email}`);
        const data = response.data;
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (user?.email) {
      fetchData();
    }
  }, [axiosPrivate, user]);
  return (
    <>
      <div className=" w-full mx-auto  overflow-x-auto">
        <div className="">
          <h1 className="text-2xl text-center font-bold bg-slate-200 py-3"> Dashboard Order</h1>
          <div className="overflow-x-auto px-3">
            {
              properties.length > 0 ?
                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr className=" font-semibold text-lg">
                        <th>No.</th>
                        <th>Title</th>
                        <th>Agent Email</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Transection Id</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {/* row 1 */}
                    <tbody>
                      {currentItems?.map((properties, index) => (
                        <tr key={properties?._id}>
                          <td>{index + 1}</td>
                          <th className=" hover:link-hover">
                            <Link to={`/properties/${properties.property._id}`}>{properties?.property?.title.length > 20 ? `${properties.property.title.slice(0, 20)}..` : properties.property.title}</Link>
                          </th>
                          <td>
                            {properties?.property?.author?.contact}
                          </td>
                          <td>
                            {properties?.date}
                          </td>
                          {/* <td className=" font-poppins border-gray-400  border">
                     {properties.expireddate}
                   </td> */}
                          <td>
                            {properties?.amount} BDT
                          </td>
                          {
                            properties?.paymentStatus ?
                            <td>{properties?.transectionId}</td>
                            :
                            <td>N/A</td>
                          }
                          <td>
                            <button>Cancel</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                :
                <div className=" w-full flex justify-center h-screen">
                  <p className=" self-center text-xl font-bold ">Not Found Any data!</p>
                </div>
            }
          </div>
        </div>
      </div>
      <div className=" flex  text-center items-center mt-7 w-full mx-auto justify-center  gap-5">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn bg-orange-300 text-black font-medium w-20">
          Previous
        </button>
        <div className="flex space-x-2">
          {renderPageNumbers()}
        </div>
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

export default Order;
