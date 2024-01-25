// import ThumbsBanner from "../../components/propertiesdetails/thumbs-banner/Thumbs-banner";
import { useEffect, useState } from 'react';
import { MdOutlineAccessTime, MdAdd, MdOutlineBathroom } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline, IoShareSocialOutline } from "react-icons/io5";
import { TbViewfinder } from "react-icons/tb";
import { FaRegHeart, FaCheckCircle } from "react-icons/fa";
import { LuClipboardCopy } from "react-icons/lu";
import GoogleMapComponent from '../../components/propertiesdetails/googlemap/GoogleMap';
import Reviews from '../../components/propertiesdetails/Review/Reviews';
import ScheduleForm from '../../components/propertiesdetails/shcedule/Schedule';
const PropertyDetails = () => {
    const [property, setProperty] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/public/details.json');
                const data = await response.json();
                setProperty(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, []);
    return (
        <div className=' bg-slate-100'>
            {property ?
                //    <div>
                //     {/* <ThumbsBanner></ThumbsBanner> */}
                //    </div>
                <div className='flex justify-between flex-wrap'>
                    {/* details */}
                    <div className=' w-full mx-auto'>
                        <img className=' w-full h-[500px]' src={property.property_image} alt="" />
                    </div>
                    <div className='w-full md:w-7/12 flex flex-wrap mx-4 my-4'>
                        {/* title, price, location section */}
                        <div className='flex bg-white flex-wrap w-full px-2 py-3'>
                            <div className=' w-full md:w-4/6 bg-zinc-50'>
                                <p className=' text-lg font-bold'>{property.title}</p>
                                <p className='flex justify-between flex-wrap'>
                                    <span className=' flex self-center'> <CiLocationOn className='self-center font-semibold' /> {property.location}</span>
                                    <span className=' self-center flex'> <MdOutlineAccessTime className=' self-center' /> {property?.property_details?.date_listed}</span>
                                    <span className=' btn bg-yellow-300'>{property?.property_status}</span>
                                </p>
                                <p className='flex justify-between md:justify-start flex-wrap'>
                                    <span className=' flex self-center md:mr-3'><IoBedOutline className=' self-center' /> Beds: {property?.property_details?.bed_rooms}</span>
                                    <span className=' flex self-center md:mr-3'><MdOutlineBathroom className=' self-center' /> Baths: {property?.property_details?.baths}</span>
                                    <span className=' flex self-center md:mr-3'> <TbViewfinder className=' self-center' /> {property?.property_details?.size}</span>
                                </p>
                            </div>
                            <div className=' w-full md:w-2/6 flex flex-wrap md:justify-end'>
                                <p className=' w-full flex justify-start md:justify-end'>
                                    <span className='p-2 rounded-full border-[1px] border-black h-fit mr-2'><FaRegHeart className='' /></span>
                                    <span className='p-2 rounded-full border-[1px] border-black h-fit mr-2'><MdAdd className='' /></span>
                                    <span className='p-2 rounded-full border-[1px] border-black h-fit mr-2'><IoShareSocialOutline /></span>
                                    <span className='p-2 rounded-full border-[1px] border-black h-fit'><LuClipboardCopy /></span>
                                </p> <br />
                                <p>{property?.property_details?.price}</p>
                            </div>
                        </div>
                        {/* description section  */}
                        <div className=' bg-white rounded-sm my-3 p-4 w-full'>
                            <h1 className=' text-xl font-bold'>Description</h1>
                            <p>{property?.description}</p>
                        </div>
                        {/* property details & facilities section  */}
                        <div className=' bg-white rounded-sm my-3 p-4 w-full'>
                            <div>
                                <h1 className=' text-xl font-bold my-2'>Property Details</h1>
                                <div className=' grid grid-cols-2 md:grid-cols-3 justify-between'>
                                    <p className='my-2'><span className='font-semibold'>Property Id:</span> {property.property_details.id}</p>
                                    <p className='my-2'><span className='font-semibold'>Rooms:</span> {property.property_details.rooms}</p>
                                    <p className='my-2'><span className='font-semibold'>Status:</span> {property.property_details.status}</p>
                                    <p className='my-2'><span className='font-semibold'>Garages:</span> {property.property_details.garages}</p>
                                    <p className='my-2'><span className='font-semibold'>Bed Rooms:</span> {property.property_details.bed_rooms}</p>
                                    <p className='my-2'><span className='font-semibold'>Type:</span> {property.property_details.type}</p>
                                    <p className='my-2'><span className='font-semibold'>Baths:</span> {property.property_details.baths}</p>
                                    <p className='my-2'><span className='font-semibold'>Originting Year:</span> {property.property_details.date_listed}</p>
                                    <p className='my-2'><span className='font-semibold'>Price:</span> {property.property_details.price}</p>
                                </div>
                            </div>
                            <div>
                                <h1 className=' text-xl font-bold my-2'>Facilities</h1>
                                <div className=' grid grid-cols-2 md:grid-cols-3 justify-between'>
                                    {
                                        property?.facilities.map(face => <p key={face} className='my-2 flex'><FaCheckCircle className=' self-center text-green-400 mr-1' /> {face}</p>)
                                    }
                                </div>
                            </div>
                        </div>
                        {/* floor design image  */}
                        <div className=' bg-white rounded-sm my-3 p-4 w-full'>
                            <h1 className=' text-xl font-bold'>Floor Plan</h1>
                            <div>
                                <img src={property?.floor_plan?.image} alt="" />
                            </div>
                        </div>
                        <div className=' bg-white rounded-sm my-3 p-4 w-full'>
                            <h1 className=' text-xl font-bold'>Map Location</h1>
                            <div className=' w-full'>
                                <GoogleMapComponent></GoogleMapComponent>
                            </div>
                        </div>
                        <div className='bg-white rounded-sm my-3 p-4 w-full '>
                            <Reviews></Reviews>
                        </div>
                    </div>

                    {/* schedule */}
                    <div className=' w-full lg:w-4/12 h-fit bg-white'>
                        <ScheduleForm></ScheduleForm>
                    </div>
                </div> :
                <p>Not found data</p>
            }
        </div>
    );
};

export default PropertyDetails;