

const BlogePropular = ({bloge}) => {
    return (
        <div className=" mb-10">
              <h1 className="xl:text-2xl lg:text-2xl  text-xl font-medium ">
                Property Categories
              </h1>

              <h1 className=" border p-2 px-7  text-[15px] font-semibold mt-5 flex justify-between ">
                Real Estate <span> ({bloge?.realestate} properties) </span>
              </h1>
              <h1 className=" border p-2 px-7  text-[15px]  font-semibold mt-5 flex justify-between ">
                House <span> ( {bloge?.House} properties) </span>
              </h1>
              <h1 className=" border p-2 px-7  text-[15px] font-semibold mt-5 flex justify-between ">
                Home Land <span> ({bloge?.HomeLand} properties) </span>
              </h1>
              <h1 className=" border p-2 px-7  text-[15px] font-semibold mt-5 flex justify-between ">
                Bath Beds <span> ({bloge?.Bath} properties) </span>
              </h1>
            </div>
    );
};

export default BlogePropular;