import { useEffect, useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";

import { IoHome } from "react-icons/io5";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import Property from "../../sharedcomponents/Property";
import Searching from "../../sharedcomponents/Searching";
// import propatices from "../../public/data.json"

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const axiosPublic = useAxiosPublic();
  // this data is load from the db ;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/home/checkout");
        const data = response.data;
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  //   pagination

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerpage = 9;
  const lastIndex = currentPage * recordsPerpage;
  const firstIndex = lastIndex - recordsPerpage;
  const records = properties.slice(firstIndex, lastIndex);
  const npage = Math.ceil(properties.length / recordsPerpage);

  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log(numbers);

  return (
    <>
      {/* BANNER SECTION  */}

      <section
        className="bg-gray-100 md:h-[500px] h-[350px] relative grid items-end"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 700px",
          backgroundPosition: "center",
          backgroundImage: "url(https://i.ibb.co/8PmVZMt/banner-bg.jpg)",
        }}
      >
        <div className="bg-white opacity-25 w-full h-full absolute"></div>
        <div className=" relative h-full">
          <div className=" w-[90%] pt-24 md:w-[80%] z-20 lg:w-[890px] xl:w-[1200px] mx-auto ">
            <h1 className="md:text-4xl  text-center  text-2xl lg:text-5xl font-bold">
              Property Grid View <br />
              <span className=" items-center flex  justify-center gap-1 text-sm lg:text-xl mt-7">
                <IoHome></IoHome> Home . PROPERTY GRID VIEW
              </span>
            </h1>
            <div className="">
              <Searching></Searching>
            </div>
          </div>
        </div>
      </section>

      {/* card section and pagination */}

      <div className=" w-full py-10">

        <div className="grid relative  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto bg-slate-100 gap-5">
          {records?.map((properties) => <Property key={properties._id} properties={properties}></Property>)}
        </div>

        {/* pagination section  */}
        <div className=" mt-12 max-w-full flex justify-center mx-auto  items-center text-center">
          <ul className=" flex items-center text-center gap-3">
            <li className=" font-bold p-2 cursor-pointer rounded-full ">
              <a
                onClick={prepage}
                className="flex items-center bg-gray-300  hover:bg-gray-400  p-2 rounded-lg px-2 text-center "
              >
                {" "}
                <MdOutlineNavigateBefore></MdOutlineNavigateBefore> prev{" "}
              </a>
            </li>
            {numbers?.map((number) => (
              <li
                className={`   hover:bg-gray-300  rounded-full py-2 px-2 ${currentPage === number ? "active" : ""
                  }`}
                key={number}
              >
                <a
                  href="#"
                  className=" text-xl font-bold p-2  "
                  onClick={() => changeCpage(number)}
                >
                  {number}{" "}
                </a>
              </li>
            ))}

            <li className=" p-2 cursor-pointer rounded-full font-bold">
              <a
                className="flex items-center bg-gray-300 hover:bg-gray-400 p-2 rounded-lg px-2 text-center "
                onClick={nextpage}
              >
                {" "}
                Next <MdOutlineNavigateNext></MdOutlineNavigateNext>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  function prepage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCpage(number) {
    setCurrentPage(number);
  }
  function nextpage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default Properties;
