import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/axiosPublic/useAxiosPublic';

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const axiosPublic = useAxiosPublic();
// make dynamic from DB ;
  useEffect(()=>{
    axiosPublic.get('/home/our-project')
    .then(data=>{
      setSliderData(data.data)
    })
  },[axiosPublic])



  
  return (
    <div >
      <div className='text-center py-5'>
        <h2 className='font-extrabold text-3xl mb-3 '><span className='text-yellow-400'>Our</span> Project</h2>
        <p className='font-semibold xl:w-[55%] lg:w-[77%]  mx-auto text-center flex justify-center '>{sliderData?.description}</p>
      </div>

      <div className='mx-3'>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,]}
          className="mySwiper"
        >
          {
            sliderData?.images?.map((img,index)=>
            <SwiperSlide key={index}><img src={img}></img></SwiperSlide>

            )
          }
         
        </Swiper>
      </div>

    </div>



  );
};

export default Slider;
