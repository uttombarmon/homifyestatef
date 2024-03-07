import { MdOutlineStarPurple500 } from "react-icons/md";

const BlogePoint = ({bloge}) => {
    return (
        <div className=" mt-12">
        <p className="flex items-center gap-3  font-serif">
          <MdOutlineStarPurple500></MdOutlineStarPurple500>
          <span>{bloge?.pointOne}</span>
        </p>
        <p className="flex items-center gap-3 mt-2 mb-2   font-serif ">
          <MdOutlineStarPurple500></MdOutlineStarPurple500>
          <span>{bloge?.pointTow}</span>
        </p>
        <p className="flex items-center gap-3   font-serif">
          <MdOutlineStarPurple500></MdOutlineStarPurple500>
          <span>{bloge?.pointhree}</span>
        </p>
      </div>
    );
};

export default BlogePoint;