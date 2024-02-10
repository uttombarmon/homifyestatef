
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import SellCard from "./SellCard";


const Sell = () => {

    const [properties, setProperties] = useState([]);
    const axiosPublic = useAxiosPublic();
    const Status = 'For Sale';
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosPublic.get("/home/checkout");
          const data = response.data;
          const filteredProperties = data.filter(property => property.property_status === Status);
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
  


    return (
        <>
        
            <div className=" ">
              <img src="https://i.ibb.co/Mgnqm3W/Brown-Modern-Real-Estate-Banner.png" className=" w-full  h-full " />
            </div>
                 {/* card section */}
                 <div className=" w-full py-10 ">
        <div className=" flex justify-between px-2 mb-4">

          {/* section title and description */}
          <div>
            <h1 className=" font-bold text-xl ml-3 lg:text-4xl py-4">Explore Our Sell Listings!</h1>
            
          </div>

          {/* explore button  */}
          <div  className=" btn self-start md:self-center border-[1px] my-6 md:my-0 border-amber-200 bg-transparent rounded-3xl font-bold"> Propety  {properties.length} </div>
        </div>
        <div className="grid relative  w-[98%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto bg-slate-100 gap-5">
          {currentItems?.map((properties) => <SellCard key={properties._id} properties={properties}></SellCard>)}
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

export default Sell;