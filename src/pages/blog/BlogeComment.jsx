const BlogeComment = ({comment}) => {
    return (
        <div>
             <div key={comment?.name} className="mt-5  px-4">
              {console.log(comment)}
              <h1 className=" text-xl font-medium">2 Commnets</h1>
              <div className=" flex mt-5 items-center gap-4 px-4">
                <div className=" w-10  ">
                  <img
                    src={comment?.photo}
                    className="rounded-full w-[35px] "
                  />
                </div>
                <h1 className=" text-xl font-medium ">
                  {comment?.name} <br />
                  <span className="  text-[12px] ">{comment?.dateTime} </span>
                </h1>
              </div>
              <p className="px-8 ml-24 mt-1 text-[15px] font-serif">
                {comment?.comment}
              </p>

              <h1 className=" border w-[55px] px-2 mb-4 py-1 border-b-green-500 text-[13px]  mt-4  ml-[130px] hover:bg-amber-300">
                replay
              </h1>
            </div>
        </div>
    );
};

export default BlogeComment;