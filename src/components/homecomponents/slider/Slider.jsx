import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div >
        <div className='text-center py-5'>
        <h2 className='font-extrabold text-3xl mb-3 '><span className='text-yellow-400'>Our</span> Project</h2>
        <p className='font-semibold justify-center items-center'>Transforming real estate management, our working project seamlessly handles property bookings, <br /> payments, and communication. Enhancing efficiency, it delivers a user-friendly experience for <br />property owners, tenants, and administrators alike.</p>
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
        <SwiperSlide><img src='https://i.ibb.co/qYjcJcp/1.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/bz3X3pj/2.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/C2WPhWp/3.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/qYjcJcp/1.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/bz3X3pj/2.jpg'></img></SwiperSlide>
      </Swiper>
        </div>
      
        </div>
        


    );
};

export default Slider;
