import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../utils/provider/AuthProvider";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
import { UsePhoto } from "../../../hooks/imageHosting/ImageHosting";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const UpdateProperty = () => {
    const { id } = useParams();
    console.log(id);

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const [propertyType, setPropertyType] = useState(null);
    const [countryType, setCountryType] = useState(null);
    const [purposeType, setPurposeType] = useState(null);
    const [featuredType, setFeaturedType] = useState(null);
    console.log(featuredType);

    const [updateProperty, setUpdateProperty] = useState(null);

    if (updateProperty) {
        
        console.log(updateProperty);
    }
    

    useEffect(()=>{
        axiosPublic.get(`/home/checkoutt/${id}`)
        .then(res => {setUpdateProperty(res.data)
            const resData = res.data;
            setPropertyType(resData.type);
            setCountryType(resData.location);
            setPurposeType(resData.property_status);
            setFeaturedType(resData.featured);
        })

        .catch(error => console.log(error.message));
    },[axiosPublic,id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const img = form.bannerImage.files[0];
        const bannerImage = await UsePhoto(img);
        //base information
        const title = form.title.value;
        const PropertyTypes = form.PropertyTypes.value;
        const description = form.description.value;
        // const bannerImage = form.bannerImage.value;
        const purpose = form.purpose.value;
        const mapCode = form.mapCode.value;
        const allinfo = {
            title,
            email: user?.email,
            PropertyTypes,
            description,
            bannerImage,
            purpose,
            mapCode  ,
           
        };

        // console.log(allinfo);

        axiosPublic.patch(`agent/propetices/update/${id}`, allinfo).then((res) => {
            console.log(res.data);
            toast.success("success full update")
        });
    };
    return (
        <div className="  xl:w-[1000px]  mx-auto mt-8 px-4 py-3 ">
            <h1 className="text-2xl font-poppins font-bold ml-3 mb-8">
                Update Property
            </h1>
            <form onSubmit={handleSubmit}>
                <div className=" bg-slate-200 px-6 py-3 ">
                    <h1 className="text-2xl font-semibold "> Basic Information </h1>
                    <div className="mt-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-2  grid text-center items-center justify-center gap-3 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={updateProperty?.title}
                                placeholder="Title"
                                className="input input-bordered"
                            />
                        </div>
                        {/* country type no propoti type */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Property types</span>
                            </label>
                          
                            <select
                                name="PropertyTypes"
                                value={propertyType} 
                                onChange={(e) => setPropertyType(e.target.value)}
                                className="select"
                            >
                                <option selected>Select property</option>
                                <option value="Apartment"> Apartment </option>
                                <option value="House"> House </option>
                                <option value="Villa"> Villa </option>
                                <option value="Office"> Office</option>
                                <option value="Factory">Factory </option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <select
                                name="country"
                                value={countryType} 
                                onChange={(e) =>  setCountryType(e.target.value)}
                                
                                className="select"
                            >
                                <option selected>Select Country</option>
                                <option value="Bangladesh"> Bangladesh </option>
                                <option value="Russia"> Russia </option>
                                <option value="Japan"> Japan </option>
                                <option value="India"> India</option>
                                <option value="Malaysia">Malaysia </option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input
                                type="text"
                                name="city"
                                defaultValue={updateProperty?.location}
                                placeholder="city name"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone </span>
                            </label>
                            <input
                                type="text"
                                defaultValue={updateProperty?.author.phone}
                                name="phone"
                                placeholder="Phone "
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={updateProperty?.author.contact}
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                            />
                        </div>

                        {/* Purpose type no */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Purpose</span>
                            </label>
                            <select name="purpose" className="select" 
                                value={purposeType} 
                                onChange={(e) =>  setPurposeType(e.target.value)}>

                                <option selected>Select Purpose</option>
                                <option value="Rent"> Rent</option>
                                <option value="Sell"> Sell </option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={updateProperty?.property_details.price} 
                                name="price"
                                placeholder="Price "
                                className="input input-bordered"
                                
                            />
                        </div>
                    </div>

                    <div className=" mt-14   mb-4">
                        <h1 className="text-xl font-bold"> Others Information </h1>
                        <div className="mt-4 xl:grid-cols-3  grid-cols-2  grid text-center items-center justify-center gap-3 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Area(Square Feet)</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.property_details.size}
                                    name="totalArea"
                                    placeholder="Total Area(Square Feet)"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Unit</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.property_details.unit}
                                    name="unit"
                                    placeholder="Total Unit"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Room</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.property_details.rooms}
                                    name="room"
                                    placeholder="Total Room "
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bedroom</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.property_details.bed_rooms}
                                    name="bedroom"
                                    placeholder="Bedroom"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bathroom</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.property_details.baths}
                                    name="bathroom"
                                    placeholder="Bathroom"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Floor</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.property_details.floor}
                                    name="floor"
                                    placeholder="Total Floor "
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Kitchen</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.property_details.kitchen}
                                    name="kitchen"
                                    placeholder="Kitchen"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Balcony</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.property_details.balcony}
                                    name="balcony"
                                    placeholder="Balcony"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Parking Place</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.property_details.garages}
                                    name="place"
                                    placeholder="Parking Place"
                                    className="input input-bordered"
                                />
                            </div>
                        </div>
                        {/* description */}
                        <textarea
                            name="description"
                            defaultValue={updateProperty?.description}
                            className="textarea textarea-bordered w-[45%] mt-5"
                            placeholder="Deiscription"
                        ></textarea>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold"> Image</h1>
                        <div className="mt-4 xl:grid-cols-3  grid-cols-2  grid text-center items-center justify-center gap-3 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Thumbnail Image </span>
                                </label>
                                <input
                                
                                    type="file"
                                    defaultValue={updateProperty?.property_details.thumImage}
                                    name="thumImage"
                                    placeholder="Enter Thumbnail Image"
                                    className="input input-bordered py-2 w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bannner Image</span>
                                </label>
                                <input
                                    type="file"
                                    defaultValue={updateProperty?.property_image}
                                    name="bannerImage"
                                    placeholder="Enter Bannner Image"
                                    className="input input-bordered py-2 w-full"
                                />
                            </div>

                            {/* Featured n0 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Featured</span>
                                </label>
                                <select name="featured" className="select"
                                     value={featuredType} 
                                    onChange={(e) =>  setFeaturedType(e.target.value)}>
                                    <option selected>Select Featured</option>
                                    <option value="yes"> Yes</option>
                                    <option value="no"> No </option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Facilities image</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.floor_plan.image}
                                    name="facilImage"
                                    placeholder="Enter Facilities image"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Google Map Code</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={updateProperty?.map}
                                    name="mapCode"
                                    placeholder="Google Map Code"
                                    className="input  input-bordered"
                                />
                            </div>
                        </div>
                    </div>

                    {/* no  */}
                    <div className=" mt-12">
                        <h1 className=" text-xl font-bold"> Facilities</h1>
                        <div className="mt-4 xl:grid-cols-4  lg:grid-cols-3 grid-cols-2 md:grid-cols-3  grid text-center items-center justify-center gap-3 ">
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Air Condition"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text"> Air Condition</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Alcohol"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text"> Alcohol</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Balcony"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text">Balcony</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Bike Parking"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text">Bike Parking </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Cable Tv"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text">Cable Tv</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Elevator In Building"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text"> Elevator In Building </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Free Coffee And Tea"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text">Free Coffee And Tea </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Good For Kids"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text"> Good For Kids </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Reservations"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text">Reservations</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Washroom"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text"> Washroom</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Kitchen"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text"> Kitchen </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="aminities"
                                        value="Cable Tv"
                                        className="checkbox checkbox-secondary "
                                    />
                                    <span className="label-text">Cable Tv</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <button className=" mt-9 font-bold text-xl px-2 hover:bg-yellow-500 rounded bg-yellow-400 w-[110px] h-12 mb-6 ">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProperty;
