import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import Property from "../../sharedcomponents/Property";
import { MdOutlineKeyboardArrowLeft ,MdOutlineKeyboardArrowRight} from "react-icons/md";
const Rent = () => {
  const [properties, setProperties] = useState([]);
  const axiosPublic = useAxiosPublic();
  const Status = "Rent";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/home/checkouttt");
        const data = response.data;
        const filteredProperties = data.filter(
          (property) => property.property_status === Status
        );
        setProperties(filteredProperties);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  // pagination code
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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
          className={` border-none rounded-full w-[38px]   font-medium mx-2 ${
            currentPage === i ? " bg-gray-100 py-2 " : ""
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div className=" ">
        <img
          src="https://i.ibb.co/16ybbd9/rent-4.jpg"
          className=" w-full  h-full "
        />
      </div>
      {/* card section */}
      <div className=" w-full py-10 ">
        <div className=" flex justify-between px-2 mb-4">
          {/* section title and description */}
          <div>
            <h1 className=" font-bold text-xl ml-3 lg:text-4xl py-4">
              Explore Our Rent Listings!
            </h1>
          </div>

          {/* explore button  */}
          <div className=" btn self-start md:self-center border-[1px] my-6 md:my-0 border-amber-200 bg-transparent rounded-3xl font-bold">
            {" "}
            Propety {properties.length}{" "}
          </div>
        </div>
        <div className="grid relative  w-[98%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto bg-slate-100 gap-5">
          {currentItems?.map((properties) => (
            <Property key={properties._id} properties={properties}></Property>
          ))}
        </div>
      </div>

     {
       properties.length > 10 && 
       <div className=" flex  text-center items-center mb-4 mt-7 w-full mx-auto justify-center  gap-5">
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
         className="   rounded-full w-[30px] h-8 px-1 py-1 font-medium bg-white border-2 hover:bg-orange-400 hover:border-none "
         >
          <MdOutlineKeyboardArrowRight/>
       </button>
     </div>
     }
    </>
  );
};

export default Rent;
