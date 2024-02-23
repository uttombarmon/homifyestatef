import { useContext, useEffect, useState } from "react";
import useAxiosPrivate from "../../../hooks/axiosPrivate/useAxiosPrivate";
import { AuthContext } from "../../../utils/provider/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { MdOutlineKeyboardArrowLeft ,MdOutlineKeyboardArrowRight} from "react-icons/md";


const Order = () => {
  const [properties, setProperties] = useState([]);
  // console.log(properties);

  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useContext(AuthContext);
  const axiosPrivate = useAxiosPrivate();
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
          className={`  border-none rounded-full w-[38px]   font-medium mx-2 ${
            currentPage === i ? " bg-gray-100 py-2 " : ""
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
        const response = await axiosPrivate.get(
          `/order/user?email=${user?.email}`
        );
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


  // order delet button api
  const handelDelete = (id) => {
    axiosPrivate
      .delete(`/order/${id}`)
      .then((e) => {
        if (e.data.deletedCount > 0) {
          toast.success("seccess full delete order");
          const filterData = properties.filter((d) => d._id !== id);
          setProperties(filterData);
        }
      })
      .catch((error) => console.log(error));
  };






  return (
    <>
      <div className=" w-full mx-auto relative  h-full overflow-x-auto">
        <div className=" bg-gray-300 h-[100vh]">
          <h1 className="text-2xl text-center font-bold  py-3">
          
            Dashboard Order
          </h1>
          <div className="overflow-x-auto px-3 ">
            {properties.length > 0 ? (
              <div className="overflow-x-auto  ">
                <table className="table border table-zebra">
                  {/* head */}
                  <thead className="border bg-green-100 text-black">
                    <tr className=" border font-semibold text-lg">
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
                  <tbody className=" border-2 bg-white">
                    {currentItems?.map((properties, index) => (
                      <tr className="border" key={properties?._id}>
                        <td>{index + 1}</td>
                        {console.log(properties?.property)}
                        <th className="text-[16px] hover:link-hover">
                          <Link to={`/properties/${properties?.property?._id}`}>
                            {properties?.property?.title?.length > 20
                              ? `${properties?.property?.title?.slice(0, 20)}..`
                              : properties?.property?.title}
                          </Link>
                        </th>
                        <td>{properties?.property?.author?.contact}</td>
                        <td>{properties?.date}</td>
                        <td>{properties?.amount} BDT</td>
                        {properties?.paymentStatus ? (
                          <td>{properties?.transectionId}</td>
                        ) : (
                          <td>N/A</td>
                        )}
                        <td className="text-center">
                          {properties?.paymentStatus ? (
                            <button className="btn btn-success btn-disabled w-[90px]">
                              Paid
                            </button>
                          ) : (
                            <Link  onClick={() => handelDelete(properties._id)}  className="btn btn-warning w-[90px]">Delete</Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className=" w-full flex justify-center h-screen">
                <p className=" self-center text-xl font-bold ">
                  Not Found Any data!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" flex absolute text-center bottom-3 items-center  w-full mx-auto justify-center  gap-5">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="   rounded-full w-[30px] h-8 px-1 py-1 font-medium bg-white border-2 hover:bg-orange-400 hover:border-none "
        >
          < MdOutlineKeyboardArrowLeft/>
        </button>
        <div className="flex space-x-2">{renderPageNumbers()}</div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= properties.length}
          className="   rounded-full w-[30px] h-8 px-1 py-1 font-medium bg-white border-2 hover:bg-orange-400 hover:border-none "        >
          <MdOutlineKeyboardArrowRight/>
        </button>
      </div>
    </>
  );
};

export default Order;
