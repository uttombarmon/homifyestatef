import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div >
        <div className='text-center mb-5'>
        <h2 className='font-extrabold text-3xl mb-3 '><span className='text-yellow-400'>Our</span> Project</h2>
        <p className='font-semibold justify-center items-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
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
        <SwiperSlide><img src='/public/1.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='/public/2.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='/public/3.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='/public/1.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='/public/3.jpg'></img></SwiperSlide>
     
    
      </Swiper>
        </div>
      
        </div>
        


    );
};

export default Slider;
