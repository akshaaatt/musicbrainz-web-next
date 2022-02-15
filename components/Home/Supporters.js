import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function Supporters(props) {
    return (
        <div className={"section-with-bg "+ props.theme}>
            <div className="title">
                <h2>Supporters</h2>
            </div>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide>
                    <img className="slide-image" width="36px" height="36px" src="/assets/img/supporters/google.svg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-image" width="36px" height="36px" src="/assets/img/supporters/bbc.svg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-image" width="36px" height="36px" src="/assets/img/supporters/microsoft.svg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-image" width="36px" height="36px" src="/assets/img/supporters/amazon.svg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-image" width="36px" height="36px" src="/assets/img/supporters/lastfm.svg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-image" width="36px" height="36px" src="/assets/img/supporters/plex.svg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-image" width="36px" height="36px" src="/assets/img/supporters/acoustid.svg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-image" width="36px" height="36px" src="/assets/img/supporters/ticketmaster.svg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide-image" width="36px" height="36px" src="/assets/img/supporters/pandora.svg" alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
