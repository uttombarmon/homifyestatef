

import { useEffect, useState } from 'react';
import Star from '../../Star/Star';




const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className='mt-8'>
            <h2 className='text-center font-semibold text-3xl'>Latest User Reivew</h2>

            <div className=' max-w-7xl mx-auto  grid md:grid-cols-2 lg:grid-cols-4'>
                {reviews.map(review =>
                    <div key={review.id} className=' my-7 p-4 '>
                        <div className='min-h-[400px] flex flex-col justify-between bg-[#FFFFFF] px-5 py-4 shadow-xl'>
                            <div>
                                <div className='flex pb-3 justify-between'>
                                    <h2 className='font-bold'>{review.title}</h2>
                                    <img className='w-[25px] h-[25px]' src={review.icon} alt="" />
                                </div>
                                <p>{review.comment}</p>

                            </div>

                            {/* star and data  */}
                            <div className=' h-[130px]'>
                                <div className="py-2 ">
                                    <Star stars={review.rating}></Star>
                                </div>
                                <div className='border-b-2 mb-4'></div>
                                <div className='flex items-center'>
                                    <div><img className='w-[60px] h-[60px] rounded-full' src="https://i.ibb.co/26WSnFR/irfan-with-coding-bg.png" alt="" /></div>
                                    <div className='pl-3'>
                                        <h2 className='font-bold'>{review.name}</h2>
                                        <p>{review.address}</p>
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



















