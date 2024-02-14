import { FaExternalLinkAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
import Property from "../../../sharedcomponents/Property";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../utils/provider/AuthProvider";



const Features = () => {
  const { searchInfo } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const axiosPublic = useAxiosPublic();
  // this data is load from the db ;
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchInfo) {
          const response = await axiosPublic.get(`/home/checkout?want=${searchInfo?.want}&type=${searchInfo?.type}&location=${searchInfo?.location}`);
          const data = response.data;
          setProperties(data);
        }
        else {
          const response = await axiosPublic.get(`/home/checkout`);
          const data = response.data;
          setProperties(data);
        }

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [axiosPublic,searchInfo]);
  console.log(properties)
  return (
    <>
      <div className=" w-full py-10 ">
        <div className=" md:flex md:justify-between px-2 mb-4">

          {/* section title and description */}
          <div className="w-full">
            <h1 className=" font-bold text-xl lg:text-4xl py-4">Explore Our Newest Listings!</h1>
            <p className=" text-md font-semibold text-justify ">Discover a collection of the finest properties recently added to our listings.</p>
          </div>

          {/* explore button  */}
          <Link to={'/properties'} className=" btn self-start md:self-center border-[1px] my-6 md:my-0 border-amber-200 bg-transparent rounded-3xl font-bold"> More Explore <FaExternalLinkAlt></FaExternalLinkAlt></Link>
        </div>
        <div className="grid relative  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto bg-slate-100 gap-5">
          {properties?.map((properties) => <Property key={properties._id} properties={properties}></Property>)}
        </div>
      </div>
    </>
  );
};

export default Features;
