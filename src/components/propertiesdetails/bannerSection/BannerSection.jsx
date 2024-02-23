


import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BannerSection() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 20000)}s`;
    };

    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('/detailsBanner.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setImages(data)
            })
    }, [])
    return (
        <>
            <Swiper  style={{ height: '500px',transition:'width  1s'}}
                spaceBetween={30}
                centeredSlides={true}
                ref={progressCircle}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper autoplay-progress"
            > <span ref={progressContent}></span>
                {
                    images?.map((img,inx)=><SwiperSlide key={inx}><img style={{height:'100%',width:'100%'}} src={img.image} alt="" /></SwiperSlide>)
                }
                
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
