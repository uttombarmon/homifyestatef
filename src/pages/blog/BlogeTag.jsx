

const BlogeTag = ({bloge}) => {
    return (
        <div className=" lg:mb-16 w-[450px]  ">
        <h1 className=" xl:text-2xl lg:text-2xl text-xl font-medium mb-4 mt-10 ">
          Popular Tags
        </h1>
        <div className=" grid gap-3 justify-between text-center items-center xl:grid-cols-3 lg:grid-cols-3 grid-cols-3 ">
          {bloge?.tag.map((taged) => (
            <p
              key={taged}
              className=" text-sm  border px-2 font-bold py-2 hover:bg-orange-400 "
            >
              {taged}
            </p>
          ))}
        </div>
      </div>
    );
};

export default BlogeTag;