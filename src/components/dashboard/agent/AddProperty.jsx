const AddProperty = () => {
  return (
    <div className="  xl:w-[1000px]  mx-auto mt-8 px-4 py-3 ">
      <h1 className="text-2xl font-poppins font-bold ml-3 mb-8">
       
        Add Property
      </h1>
      <div className=" bg-slate-200 px-6 py-3 ">
        <h1 className="text-2xl font-semibold "> Basic Information </h1>
        <div className="mt-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-2  grid text-center items-center justify-center gap-3 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">property types</span>
            </label>
            <input
              type="text"
              placeholder="property types"
              className="input input-bordered"
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <input
              type="text"
              placeholder="Select Country "
              className="input input-bordered"
              required
            />
          </div> */}
          
            <select className="select mt-8">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
           
  <option disabled selected>Select Countray</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>







          <div className="form-control">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <input
              type="text"
              placeholder="Select City"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
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
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Purpose</span>
            </label>
            <input
              type="text"
              placeholder="Select Purpose"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
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
                type="text"
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
                placeholder="Parking Place"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <textarea
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
                placeholder="Thumbnail Image"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bannner Image</span>
              </label>
              <input
                type="text"
                placeholder="Bannner Image"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Featured</span>
              </label>
              <input
                type="text"
                placeholder="Featured"
                className="input  input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Facilities imafe</span>
              </label>
              <input
                type="text"
                placeholder="Facilities imafe"
                className="input  input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Google Map Code</span>
              </label>
              <input
                type="text"
                placeholder="Google Map Code"
                className="input  input-bordered"
              />
            </div>
          </div>
        </div>

        <div className=" mt-12">
          <h1 className=" text-xl font-bold"> Aminities</h1>
          <div className="mt-4 xl:grid-cols-4  lg:grid-cols-3 grid-cols-2 md:grid-cols-3  grid text-center items-center justify-center gap-3 ">
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text"> Air Condition</span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text"> Alcohol</span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text">Balcony</span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text">Bike Parking </span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text">Cable Tv</span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text"> Elevator In Building </span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text">Free Coffee And Tea </span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text"> Good For Kids </span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text">Reservations</span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text"> Washroom</span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary "
                />
                <span className="label-text"> Kitchen </span>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
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
    </div>
  );
};

export default AddProperty;
