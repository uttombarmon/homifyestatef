import React from 'react';

const Review = () => {
    return (
        <div className='mt-8'>
            <h2 className='text-center font-semibold text-3xl'>Latest User Reivew</h2>
            <div className='md:flex my-7 p-4 gap-4 bg-[#FFF7F5] max-w-7xl mx-auto'>
                
                {/* div 1 */}
                <div className='bg-[#FFFFFF] px-5 py-9'>
                    <div className='flex pb-3 justify-between'>
                        <h2 className='font-bold'>Great Work</h2>
                        <img className='w-[25px] h-[25px]' src="https://i.ibb.co/zSsX6yR/cotation-icon-removebg-preview.png" alt="" />
                    </div>
                    <p>"Incredible variety, easy navigation, and swift delivery! This website surpassed my expectations. A one-stop-shop for quality products with unbeatable prices. User-friendly interface and helpful customer support make it my go-to online destination. Highly satisfied!"</p>
                    <div className="rating items-center w-[70px] h-[70px]">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className='border-b-2 mb-4'></div>
                    <div className='flex items-center'>
                        <div><img className='w-[70px] h-[70px] rounded-full' src="https://i.ibb.co/26WSnFR/irfan-with-coding-bg.png" alt="" /></div>
                        <div className='pl-3'>
                            <h2 className='font-bold'>Irfan Khan Pathan</h2>
                            <p>Dhaka,Bangladesh</p>
                        </div>
                    </div>
                </div>
                {/* div 2 */}
                <div className='bg-[#FFFFFF] px-5 py-9'>
                    <div className='flex pb-3 justify-between'>
                        <h2 className='font-bold'>Great Work</h2>
                        <img className='w-[25px] h-[25px]' src="https://i.ibb.co/zSsX6yR/cotation-icon-removebg-preview.png" alt="" />
                    </div>
                    <p>"Incredible variety, easy navigation, and swift delivery! This website surpassed my expectations. A one-stop-shop for quality products with unbeatable prices. User-friendly interface and helpful customer support make it my go-to online destination. Highly satisfied!"</p>
                    <div className="rating items-center w-[70px] h-[70px]">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className='border-b-2 mb-4'></div>
                    <div className='flex items-center'>
                        <div><img className='w-[70px] h-[70px] rounded-full' src="https://i.ibb.co/26WSnFR/irfan-with-coding-bg.png" alt="" /></div>
                        <div className='pl-3'>
                            <h2 className='font-bold'>Irfan Khan Pathan</h2>
                            <p>Dhaka,Bangladesh</p>
                        </div>
                    </div>
                </div>
                {/* div 3 */}
                <div className='bg-[#FFFFFF] px-5 py-9'>
                    <div className='flex justify-between pb-3'>
                        <h2 className='font-bold'>Great Work</h2>
                        <img className='w-[25px] h-[25px]' src="https://i.ibb.co/zSsX6yR/cotation-icon-removebg-preview.png" alt="" />
                    </div>
                    <p>"Incredible variety, easy navigation, and swift delivery! This website surpassed my expectations. A one-stop-shop for quality products with unbeatable prices. User-friendly interface and helpful customer support make it my go-to online destination. Highly satisfied!"</p>
                    <div className="rating items-center w-[70px] h-[70px]">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className='border-b-2 mb-4'></div>
                    <div className='flex items-center'>
                        <div><img className='w-[70px] h-[70px] rounded-full' src="https://i.ibb.co/26WSnFR/irfan-with-coding-bg.png" alt="" /></div>
                        <div className='pl-4'>
                            <h2 className='font-bold'>Irfan Khan Pathan</h2>
                            <p>Dhaka,Bangladesh</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;