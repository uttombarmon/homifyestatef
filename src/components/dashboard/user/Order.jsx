import { useEffect, useState } from "react";

const Order = () => {
  const [properties, setProperties] = useState([]);
  // console.log(properties);

 // pagination

 const [currentPage, setCurrentPage] = useState(1);
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
        const response = await fetch("/order.json");
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
    <div className=" w-full mx-auto px-4 bg-slate-100  overflow-x-auto">
      <div className="">
        <h1 className="text-xl  font-bold  mb-6 ml-3 mt-3"> Dashboard Order</h1>
        <div className="overflow-x-auto px-3">
          <table className="table text-center table-xl">
            <thead>
              <tr className="xl:text-xl text-[17px] border bg-[#a4aca8a8] text-black">
                <th className="border text-center bg-orange-300"> No </th>
                <th className="border text-center">Property Name</th>
                <th className="border"> Date</th>
                <th className="border bg-green-400">Price</th>
                <th className="border   bg-red-400">Action</th>
              </tr>
            </thead>
            {currentItems?.map((properties) => (
              <tbody
                key={properties.id}
                className="text-black border cursor-pointer  xl:text-[17px] font-medium "
              >
                <tr>
                  <th className="text-center border-gray-400  border">
                    {properties.serial}
                  </th>
                  <td className=" font-serif border-gray-400 xl:text-[22px] border">
                    {properties.package}
                  </td>
                  <td className=" font-poppins border-gray-400   border">
                    {properties.purchasedate}
                  </td>
                  {/* <td className=" font-poppins border-gray-400  border">
                    {properties.expireddate}
                  </td> */}
                  <td className=" font-thin border-gray-400  border">
                    {properties.price}
                  </td>
                  <td className="text-xl   font-semibold font-mono hover:text-orange-300 border-gray-400  border">
                    <span className=" border px-3  py-2 bg-orange-300 text-black text-[16px] hover:bg-orange-500  "> Cancel </span> 
                    <span className=" border hidden px-3 py-2 bg-orange-300 text-black  text-[16px] hover:bg-orange-500 "> Pay Now</span>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
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
