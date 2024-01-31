

const AddProperty = () => {
    return (
        <div>
            <div className=" border w-[1000px] mx-auto mt-8 px-4 py-3  bg-slate-300 ">
            <h1 className="text-2xl font-semibold"> Update Information </h1>
          <div className="mt-4 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2  grid text-center items-center justify-center gap-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Website</span>
              </label>
              <input
                type="text"
                placeholder="Website"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="number"
                placeholder="Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                placeholder="Photo"
                className="input items-center py-2 input-bordered"
                required
                
              />
            </div>
          </div>          
          <button className=" mt-4 font-semibold px-2 hover:bg-yellow-500 bg-yellow-400 w-[160px] h-12 mb-6 "> Update Information </button>
        </div>
        </div>
    );
};

export default AddProperty;