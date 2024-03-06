import { BsCalendarDate } from "react-icons/bs";


const BlogePopuler = ({populer}) => {
    return (
        <div className="  flex gap-5">
        <div>
          <img
            src={populer.img2}
            className=" lg:w-[150px] w-[130px] h-[90px]    "
            alt=""
          />
        </div>
        <div>
          <p className=" xl:text-[17px] text-sm    flex items-center gap-2 mb-3">
            <BsCalendarDate></BsCalendarDate> {populer.date}
          </p>
          <h1 className="  text-[15px]   font-semibold">
            {populer.title}
          </h1>
        </div>
      </div>
    );
};

export default BlogePopuler;