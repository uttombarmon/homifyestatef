import { FaArrowRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaArrowTurnDown } from "react-icons/fa6";
import { TiArrowMoveOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { CgMathPlus } from "react-icons/cg";
import { useEffect, useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";

import { IoHome } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
// import propatices from "../../public/data.json"

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("pagenation.json");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        className="bg-gray-100 xl:mb-52 lg:mb-40  md:h-[400px] h-[350px] relative border-4 grid items-end"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 700px",
          backgroundPosition: "center",
          backgroundImage: "url(https://i.ibb.co/8PmVZMt/banner-bg.jpg)",
        }}
      >
        <div className="bg-white opacity-25 z-10 w-full h-full absolute"></div>
        <div className=" w-[90%] md:w-[80%] z-20 lg:w-[890px] xl:w-[1200px] mx-auto ">
          <h1 className="md:text-4xl  text-center  text-2xl lg:text-5xl lg:mb-40 xl:mb-40 mb-36 font-bold">
            Property Grid View <br />
            <span className=" items-center flex  justify-center gap-1 text-sm lg:text-xl mt-7">
              <IoHome></IoHome> Home . PROPERTY GRID VIEW
            </span>
          </h1>
        </div>
        <div className="z-20 absolute mt-28 -bottom-44 xl:ml-28 lg:ml-11 ">
          <div className=" hidden bg-white h-[220px] border border-blue-400 w-[930px] justify-center mx-auto  lg:grid items-end mb-10 xl:w-[1200px]">
            <div className="flex w-[95%] mx-auto">
              {/* <span className="text-black hover:bg-slate-200  bg-white border py-2 px-5">Buy</span>
                        <span className="text-black hover:bg-slate-200 bg-white border py-2  px-5">Sell</span>
                        <span className="text-black hover:bg-slate-200 bg-white border py-2  px-5">Rent</span> */}

              <div role="tablist" className="tabs mt-2 tabs-lifted">
                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab text-black hover:bg-gray-400 p-2 font-bold"
                  aria-label="Buy"
                />
                <div role="tabpanel" className="tab-content  rounded-box p-2">
                  <div className=" h-[150px] w-[95%] mx-auto mb-7 ">
                    <div className=" w-[90%] mx-auto grid text-3xl pt-2  justify-end">
                      <BiDotsVerticalRounded></BiDotsVerticalRounded>
                    </div>
                    <div className="  h-[140px] w-[98%]  mb-4  grid items-end">
                      <form className="card-body ">
                        <div className=" grid md:grid-cols-5 gap-2 justify-between items-center ">
                          <div className="">
                            <label className="label">
                              <span className="label-text">Location</span>
                            </label>
                            <div className="border">
                              <select className="select select-ghost w-full max-w-xs border">
                                <option disabled selected>
                                  Pick the best JS framework
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label className="label">
                              <span className="label-text">Type</span>
                            </label>
                            <div className="border">
                              <select className="select select-ghost w-full max-w-xs border">
                                <option disabled selected>
                                  Pick the best JS framework
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label className="label">
                              <span className="label-text">price</span>
                            </label>
                            <div className="border">
                              <select className="select select-ghost w-full max-w-xs border">
                                <option disabled selected>
                                  value
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label className="label">
                              <span className="label-text">KeyWord</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Your Keyword"
                              className="input input-bordered rounded-none"
                              required
                            />
                          </div>
                          <div className="mt-10  w-[165px] grid justify-end">
                            <button className="btn  text-xl bg-yellow-300 hover:bg-yellow-400">
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab  text-black hover:bg-gray-400 p-2 font-bold"
                  aria-label="Sell"
                  checked
                />
                <div role="tabpanel" className="tab-content rounded-box p-2">
                  <div className=" h-[150px] w-[95%] mx-auto mb-7 ">
                    <div className=" w-[90%] mx-auto grid text-3xl pt-2  justify-end">
                      <BiDotsVerticalRounded></BiDotsVerticalRounded>
                    </div>
                    <div className="  h-[140px] w-[98%]  mb-4  grid items-end">
                      <form className="card-body ">
                        <div className=" grid md:grid-cols-5 gap-2 justify-between items-center ">
                          <div className="">
                            <label className="label">
                              <span className="label-text">Location</span>
                            </label>
                            <div className="border">
                              <select className="select select-ghost w-full max-w-xs border">
                                <option disabled selected>
                                  Pick the best JS framework
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label className="label">
                              <span className="label-text">Type</span>
                            </label>
                            <div className="border">
                              <select className="select select-ghost w-full max-w-xs border">
                                <option disabled selected>
                                  Pick the best JS framework
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label className="label">
                              <span className="label-text">price</span>
                            </label>
                            <div className="border">
                              <select className="select select-ghost w-full max-w-xs border">
                                <option disabled selected>
                                  value
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label className="label">
                              <span className="label-text">KeyWord</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Your Keyword"
                              className="input input-bordered rounded-none"
                              required
                            />
                          </div>
                          <div className="mt-10  w-[165px] grid justify-end">
                            <button className="btn  text-xl bg-yellow-300 hover:bg-yellow-400">
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab  text-black hover:bg-gray-400 p-2 font-bold"
                  aria-label="Rent "
                />
                <div role="tabpanel" className="tab-content rounded-box p-2">
                  {" "}
                  <div className=" h-[150px] w-[95%] mx-auto mb-7 ">
                    <div className=" w-[90%] mx-auto grid text-3xl pt-2  justify-end">
                      <BiDotsVerticalRounded></BiDotsVerticalRounded>
                    </div>
                    <div className="  h-[140px] w-[98%]  mb-4  grid items-end">
                      <form className="card-body ">
                        <div className=" grid md:grid-cols-5 gap-2 justify-between items-center ">
                          <div className="">
                            <label className="label">
                              <span className="label-text">Location</span>
                            </label>
                            <div className="border">
                              <select className="select select-ghost w-full max-w-xs border">
                                <option disabled selected>
                                  Pick the best JS framework
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label className="label">
                              <span className="label-text">Type</span>
                            </label>
                            <div className="border">
                              <select className="select select-ghost w-full max-w-xs border">
                                <option disabled selected>
                                  Pick the best JS framework
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label className="label">
                              <span className="label-text">price</span>
                            </label>
                            <div className="border">
                              <select className="select select-ghost w-full max-w-xs border">
                                <option disabled selected>
                                  value
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                            </div>
                          </div>
                          <div className="">
                            <label className="label">
                              <span className="label-text">KeyWord</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Your Keyword"
                              className="input input-bordered rounded-none"
                              required
                            />
                          </div>
                          <div className="mt-10  w-[165px] grid justify-end">
                            <button className="btn  text-xl bg-yellow-300 hover:bg-yellow-400">
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* card section and pagination */}

      <div className=" w-full py-10">
        <h1 className=" my-4 w-full items-center text-center font-bold lg:text-2xl h-fit ">
          Check Out the Latest Real <br /> Estate Listing
        </h1>

        <div className="grid relative  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto bg-slate-100 gap-5">
          {records?.map((properties) => (
            <div
              key={properties.id}
              className="  p-2 relative  rounded  lg:w-full md:w-[300px] w-[350px] mx-auto h-[400px] justify-center "
            >
              <div className="lg:w-full md:w-[300px] top-0 h-[300px]   shadow-xl relative">
                <img
                  src={properties.image}
                  className=" h-full  w-full rounded-t-md "
                  alt="Shoes"
                />
              </div>
              {/* description part */}
              <div className=" absolute bottom-[20px] w-full flex justify-center">
                <div className="px-3 py-3 rounded-md shadow-lg bg-white lg:w-3/4  md:w-[280px] items-center   ">
                  <h2 className=" mt-2 lg:text-[18px] text-sm mb-2 font-semibold">
                    {/* Hemosa Casa al Norte */} {properties.title}
                  </h2>
                  <div>
                    <p className=" font-semibold flex text-sm  items-center gap-1 mb-1 text-center">
                      <IoLocationSharp></IoLocationSharp> {properties.location}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-2 mb-1  text-[15px] font-medium">
                    <div className="flex items-center gap-1  ">
                      <IoGameControllerOutline className=" bg-slate-300 rounded-full text-[20px] p-1"></IoGameControllerOutline>
                      <button className=" text-sm">
                        beds {properties.beds}{" "}
                      </button>
                    </div>
                    <div className="flex items-center gap-1  ">
                      <FaArrowTurnDown className=" bg-slate-300 rounded-full text-[20px] p-1"></FaArrowTurnDown>
                      <button className=" text-sm">
                        baths {properties.baths}{" "}
                      </button>
                    </div>
                    <div className="flex items-center gap-1  ">
                      <TiArrowMoveOutline className=" bg-slate-300 rounded-full text-xs p-1"></TiArrowMoveOutline>
                      <button className=" text-sm">
                        {properties.sqft}sq Ft{" "}
                      </button>
                    </div>
                  </div>
                  <hr className=" w-[95%] mx-auto mt-2 font-bold " />
                  <div className=" flex justify-between px-2 mt-2 mb-2">
                    <div className="flex justify-center items-center gap-2">
                      <button className="font-semibold text-sm ">
                        More Details{" "}
                      </button>
                      <FaArrowRight className="rounded-full bg-base-300"></FaArrowRight>
                    </div>

                    {/* reation  */}
                    <p>
                      <div className="rating rating-sm">
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-6"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              {/* icone setp photo  */}

              <div className="absolute px-3  rounded-full  left-[60%] lg:left-[60%] lg:bottom-[180px] xl:bottom-[160px] bottom-[160px] items-center ">
                <div className=" rounded-md text-white hover:bg-red-500 bg-orange-500 gap-3 px-2 py-1 ">
                  <p className=" font-semibold">{properties.price}</p>
                </div>
              </div>
              {/* rent, Features and share section  */}
              <div className=" absolute flex flex-row-reverse top-20 left-10">
                <div className="px-3  rounded-full lg:ml-10  bottom-[340px]  w-[100px] items-center ">
                  <div className="flex  text-white  gap-2 ">
                    <p className=" bg-gray-400 hover:bg-orange-500 rounded-full text-xl p-1 ">
                      <IoMdShare />
                    </p>
                    <p className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 ">
                      <FaRegHeart />
                    </p>
                    <p className=" bg-gray-400 hover:bg-orange-500  rounded-full text-xl p-1 ">
                      <CgMathPlus />
                    </p>
                  </div>
                </div>

                <div className="px-3  rounded-full bottom-[300px]  w-[100px] items-center ">
                  <div className="text-white flex flex-col  gap-1 ">
                    <p className=" bg-black hover:bg-orange-400 items-center text-center p-1 font-bold rounded-full">
                      Rent
                    </p>
                    <p className=" bg-red-400 hover:bg-orange-400 items-center text-center p-1 rounded-full font-bold">
                      Features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
                className={`   hover:bg-gray-300  rounded-full py-2 px-2 ${
                  currentPage === number ? "active" : ""
                }`}
                key={number.id}
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
