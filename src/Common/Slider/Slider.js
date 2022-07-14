import {A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';
import {CardSlider} from "../CardSlider/CardSlider";

import s from "./slider.module.css"
import 'swiper/css';

export const Slider = ({onToggleButtonHandler, isVisible}) => {
    const slides = Array.from({length: 1000}).map(
        (el, index) => <CardSlider onToggleButtonHandler={onToggleButtonHandler} isVisible={isVisible}/>
    );
    return (
        <Swiper
            style={{width: "100%"}}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]}
            spaceBetween={250}
            slidesPerView={isVisible ? 1 : 2}
            autoplay={true}
            speed={700}
            // effect={"coverflow"}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slideContent, index) => (
                <SwiperSlide key={slideContent} virtualIndex={index + 1}>
                    {({isActive}) => (
                        <div>
                            {isActive ? null : <div className={s.wrapper_cover}></div>}
                            {slideContent}
                        </div>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

