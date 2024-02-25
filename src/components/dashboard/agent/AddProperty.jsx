import { useContext, useState } from "react";
import useAxiosPublic from './../../../hooks/axiosPublic/useAxiosPublic';
import { AuthContext } from "../../../utils/provider/AuthProvider";
import toast from "react-hot-toast";
import { UsePhoto } from "../../../hooks/imageHosting/ImageHosting";


const AddProperty = () => {

  const { user } = useContext(AuthContext);
  console.log(user);

  const [checkData, setCheckData] = useState([]);

  const axiosPublic = useAxiosPublic();

  const currentDate = new Date();
  const localDate = currentDate.toISOString().split('T')[0];

  const handleSubmit =async(event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.bannerImage.files[0];
    const bannerImage = await UsePhoto(img);
    //base information
    const title = form.title.value;
    const address = form.address.value;
    const city = form.city.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const price = form.price.value;
    //  Others Information
    const totalArea = form.totalArea.value;
    const unit = form.unit.value;
    const room = form.room.value;
    const bedroom = form.bedroom.value;
    const bathroom = form.bathroom.value;
    const floor = form.floor.value;
    const kitchen = form.kitchen.value;
    const balcony = form.balcony.value;
    const place = form.place.value;
    const description = form.description.value;
    const thumImage = form.thumImage.value;
    // const bannerImage = form.bannerImage.value;
    const facilImage = form.facilImage.value;
    const mapCode = form.mapCode.value;
    const PropertyTypes = form.PropertyTypes.value;
    const country = form.country.value;
    const purpose = form.purpose.value;
    const featured = form.featured.value;



    const allProperties = {
      "title": `${title}`,
      "email":`${email}`,
      "location": `${address},${city},${country}`,
      "property_status": `${purpose}`,
      "description": `${description}`,
      "property_image": `${bannerImage}`,
      "property_details": {
        "rooms": `${room}`,
        "status": "Available",
        "price": `${price}`,
        "garages": `${place}`,
        "bed_rooms": `${bedroom}`,
        "type": `${PropertyTypes}`,
        "baths": `${bathroom}`,
        "originating_year": 2023,
        "size": `${totalArea}`,
        "date_listed": localDate,
        "floor": `${floor}`,
        "kitchen": `${kitchen}`,
        "balcony": `${balcony}`,
        "thumImage": `${thumImage}`,
        "unit": `${unit}`,
        "featured": `${featured}`

      },
      "facilities": [`${checkData}`],
      "floor_plan": {
        "image": `${facilImage}`
      },
      "map": `${mapCode}`,
      "author": {
        "name": `${user.displayName}`,
        "contact": `${email}`,
        "phone": `${phone}`
      }
    }
    // console.log(allProperties);


    // send data to the server site

    axiosPublic.post("/home/checkout", allProperties)
      .then(data =>{
        console.log(data.data)
        if(data.data) {
          toast.success("Thank You! Your property added Success!");
        }
      }
      )
      .catch(err => console.log(err.message))


  };
  // facilities Section 
  const handleChange = (e) => {
    const data = e.target.value;
    const checked = e.target.checked;
    console.log(data, checked);
    if (checked) {
      setCheckData([
        ...checkData, data
      ])
    }
    else {
      setCheckData(checkData.filter((e) => (e !== data))
      )
    }
  }

  return (
    <div className="  xl:w-[1000px]  mx-auto mt-8 px-4 py-3 ">
      <h1 className="text-2xl font-poppins font-bold ml-3 mb-8">

        Add Property
      </h1>
      <form onSubmit={handleSubmit} >
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
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            {/* country type no propoti type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Property types</span>
              </label>
              <select name="PropertyTypes" className="select">
                <option selected  >Select property</option>
                <option value="Appartment"> Appartment </option>
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
              <select name="country" className="select">
                <option selected >Select Country</option>
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
                placeholder="city name"
                className="input input-bordered"
                required
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone </span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone "
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
                defaultValue={user?.email}
              />
            </div>

            {/* Purpose type no */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Purpose</span>
              </label>
              <select name="purpose" className="select">
                <option selected >Select Purpose</option>
                <option value="Rent"> Rent</option>
                <option value="Sale"> Sale </option>

              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
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
                  name="totalArea"
                  placeholder="Total Area(Square Feet)"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Unit</span>
                </label>
                <input
                  type="text"
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
                  name="room"
                  placeholder="Total Room "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bedroom</span>
                </label>
                <input
                  type="text"
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
                  name="bathroom"
                  placeholder="Bathroom"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Floor</span>
                </label>
                <input
                  type="text"
                  name="floor"
                  placeholder="Total Floor "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Kitchen</span>
                </label>
                <input
                  type="text" name="kitchen"
                  placeholder="Kitchen"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Balcony</span>
                </label>
                <input
                  type="text"
                  name="balcony"
                  placeholder="Balcony"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Parking Place</span>
                </label>
                <input
                  type="text"
                  name="place"
                  placeholder="Parking Place"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* description */}
            <textarea
              name="description"
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
                  type="text"
                  name="thumImage"
                  placeholder="Enter Thumbnail Image"
                  className="input input-bordered w-full"
                />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bannner Image</span>
                </label>
                <input
                  type="file"
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
                <select name="featured" className="select">
                  <option selected >Select Featured</option>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="checkbox checkbox-secondary "
                  />
                  <span className="label-text">Cable Tv</span>
                </label>
              </div>
            </div>
          </div>

          <button className=" mt-9 font-bold text-xl px-2 hover:bg-yellow-500 rounded bg-yellow-400 w-[110px] h-12 mb-6 ">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;



