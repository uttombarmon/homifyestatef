

import { useEffect, useState } from 'react';
import Star from '../../Star/Star';
import useAxiosPublic from '../../../hooks/axiosPublic/useAxiosPublic';




const Review = () => {
    const [reviews, setReviews] = useState([]);
    const axiospublic = useAxiosPublic();
    useEffect(() => {
        axiospublic.get('/home/reviews')
            .then(res => {
                setReviews(res.data)
            })

    }, [axiospublic]);

    return (
        <div className='mt-8'>
            <h2 className='text-center font-semibold text-3xl'>Latest User Reivew</h2>

            <div className=' max-w-7xl mx-auto px-1 grid md:grid-cols-2 lg:grid-cols-4'>
                {reviews.map(review =>
                    <div key={review?._id} className=' my-7 h-96 p-4 lg:p-1'>
                        <div className=' h-full flex flex-col justify-between bg-[#FFFFFF] px-5 py-4 shadow-xl'>
                            <div>
                                <div className='flex pb-3 justify-between'>
                                    <img className='w-[25px] h-[25px]' src={'https://i.ibb.co/zSsX6yR/cotation-icon-removebg-preview.png'} alt="" />
                                </div>
                                <p className=' text-md text-justify'>{review?.comment}</p>

                            </div>

                            {/* star and data  */}
                            <div className=' h-[130px]'>
                                <div className="py-2 ">
                                    <Star stars={review?.rating}></Star>
                                </div>
                                <div className='border-b-2 mb-4'></div>
                                <div className='flex items-center'>
                                    <div><img className='w-[60px] h-[60px] rounded-full' src={review?.image} alt="" /></div>
                                    <div className='pl-3'>
                                        <h2 className='font-bold'>{review?.name}</h2>
                                        <p>{review?.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Review;



















