import { useSwiper } from 'swiper/react'

import s from "./arrow.module.css"

const Arrow = () => {
    const swiper = useSwiper();

    return (
            <div className={s.arrowsItems}>
                <div id={s.arrow_1} className={s.arrowWrapper}>
                    <div className={`${s.arrow} ${s.arrowLeft}`} onClick={() => swiper.slidePrev()}>
                        <span></span>
                    </div>
                    <div className={s.block}></div>
                    <div className={`${s.arrow} ${s.arrowRight}`} onClick={() => swiper.slideNext()}>
                        <span></span>
                    </div>
                </div>
            </div>
    );
};

export default Arrow;