import { useEffect, useState } from "react";
import Star from "../../Star/Star";
import ReviewForm from "./ReviewForm";
import useAxiosPrivate from "../../../hooks/axiosPrivate/useAxiosPrivate";
const Reviews = ({id}) => {
    const [reviews, setReviews] = useState([]);
    const [starCategories, setStarCategories] = useState({});
    const [highestCategory, setHighestCategory] = useState('');
    const axiosPrivate = useAxiosPrivate()
    const [rating, setRating] = useState(0)

    useEffect(() => {
        axiosPrivate.get(`/home/reviews/id/${id}`)
            .then(data => {
                setReviews(data.data)
                console.log(data.data);
                const categories = {};

                // Categorize reviews based on ratings
                for (let i = 1; i <= 5; i++) {
                    categories[`${i} star`] = data.filter(review => parseInt(review.rating) === i);
                }
                setStarCategories(categories);
                const highest = Object.keys(categories).reduce((a, b) => (categories[a].length > categories[b].length ? a : b));
                setHighestCategory(highest);
                const ratings = parseInt(highest.slice(0, 1))
                setRating(ratings)
            })
            .catch(err=> console.log(err.message))
    }, [axiosPrivate,id]);
    // Calculate percentage of reviews for each rating category
    const calculatePercentages = () => {
        const totalReviews = reviews.length;

        const percentages = {};
        for (const category in starCategories) {
            const categoryCount = starCategories[category].length;
            const percentage = (categoryCount / totalReviews) * 100;
            percentages[category] = percentage.toFixed(2);
        }
        return percentages;
    };

    const ratingPercentages = calculatePercentages();
    console.log(ratingPercentages);
    return (
        <div className=" w-full">
            <h1>Customer Reviews</h1>
            {/* <h1>Customer Reviews</h1> */}
            <div className=" w-full flex flex-wrap">
                <div className=" bg-slate-100 flex w-full justify-center flex-wrap text-center h-36 md:w-1/2">
                    <div className="self-center w-fit">
                        <p className=" text-xl font-bold">{highestCategory}</p>
                        <Star stars={rating}></Star>
                        <p>{ }</p>
                    </div>
                </div>
                <div className=" w-1/2">
                    <div>
                        {/* Display reviews for each star category */}
                        {Object.keys(starCategories).map((category, index) => (
                            <div key={index} className=" flex justify-around">
                                <h2 className=" capitalize">{category}</h2>
                                {/* Visual representation of the percentage using a progress bar */}
                                <div className=" w-[80%] h-[15px] text-xs bg-slate-200 rounded-sm my-[6px]">
                                    <div className={`h-full bg-amber-500 rounded-md text-white text-center font-bold`}
                                        style={{
                                            width: `${ratingPercentages[category]}%`,
                                        }}
                                    >
                                        {`${ratingPercentages[category]}%`}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" w-full">
                    <div className='mt-8'>
                        <h2 className='font-semibold text-3xl'>Reivews</h2>

                        <div className=' max-w-7xl mx-auto px-1'>
                            {reviews.map(review =>
                                <div key={review._id} className=' p-4 lg:p-1'>
                                    <div className=' h-full flex flex-wrap-reverse justify-between bg-[#FFFFFF] px-5 py-4'>
                                            <p>{review.comment}</p>
                                        {/* star and data  */}
                                        <div className=' h-[130px] flex flex-wrap justify-between w-full'>
                                            <div className='flex items-center'>
                                                <div><img className='w-[60px] h-[60px] rounded-full' src={review?.image} alt="" /></div>
                                                <div className='pl-3'>
                                                    <h2 className='font-bold'>{review?.name}</h2>
                                                    <p>{review?.date}</p>
                                                </div>
                                            </div>
                                            <div className="py-2 self-center">
                                                <Star stars={review?.rating}></Star>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <ReviewForm id={id}></ReviewForm>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;