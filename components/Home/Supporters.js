import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper";

export default function Supporters(props) {
    return (

    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
        <SwiperSlide>
            <img className="slide-image" width="36px" height="36px" src="/assets/img/meb-logos/9.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-image" width="36px" height="36px" src="/assets/img/meb-logos/9.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-image" width="36px" height="36px" src="/assets/img/meb-logos/9.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-image" width="36px" height="36px" src="/assets/img/meb-logos/9.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-image" width="36px" height="36px" src="/assets/img/meb-logos/9.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-image" width="36px" height="36px" src="/assets/img/meb-logos/9.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-image" width="36px" height="36px" src="/assets/img/meb-logos/9.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-image" width="36px" height="36px" src="/assets/img/meb-logos/9.jpg" alt=""/>
        </SwiperSlide>
    </Swiper>
    )
}
