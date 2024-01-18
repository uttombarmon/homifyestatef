import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

const Star = ({stars}) => {
   const ratingStar = Array.from({length: 5}, (elem, index)=>{
        let number= index + 0.5;

        return (
            <div>
                <span className="" key={index}>
                    {
                        stars >= index + 1 ?( <FaStar className="text-2xl  text-orange-300"/>) :
                        stars >= number ? (<FaStarHalfAlt className="text-2xl text-orange-300"/>) :
                        (<AiOutlineStar className="text-2xl text-orange-300"/>)
                    }
                </span>
            </div>
        );
    });

    return (
        <div className="flex items-center gap-1">
            {ratingStar}
        </div>
    )
    
};

export default Star;