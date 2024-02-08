import { useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const Wishlist = () => {
  const [properties, setProperties] = useState([]);

  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/wishlist.json");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full mx-auto overflow-x-auto bg-gray-100 px-2">
        <h1 className="text-xl font-bold mb-6 mt-3 text-center"> Wishlist </h1>
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
              {currentItems?.map((property) => (
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
                    <p className="text-[15px] font-medium">
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
                    <button className="text-base md:text-xl font-medium font-serif w-full md:w-[90px] lg:w-[90px] xl:w-[110px] flex items-center gap-2">
                      <span>
                        <RiDeleteBin7Line />
                      </span>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className=" flex  text-center items-center mt-7 w-full mx-auto justify-center  gap-5">
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
