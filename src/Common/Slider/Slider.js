import {A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';
import {CardSlider} from "../CardSlider/CardSlider";

import s from "./slider.module.css"
import 'swiper/css';

const dataImg = [{
    id: 1,
    url: "https://s3-alpha-sig.figma.com/img/c532/6728/4e1dee14b549efb168f3a770c9650916?Expires=1658102400&Signature=cHltPMpoudc7pdUj6-taXmW-cnbJd9y9ArkT3PcOHFpnf82inBqtJDatOzq2Kmnjo5Tzwlh0vHOAmJUQiWya6DQ0Y14xESYDhY7gMvE0bKEA8SYGvtMGB1ANWRu~cWeVIil-o9d8veY0Vp9b~5ldn3pNfjKhfYKKmZpQCjNEFWgRTPXbQHCPPR4OJUq1QbqiznIx9fqk7SP164FWTAvCgaNcvxuIdh-uhp4aoDoMrAgKfzqOMvE73K8y6ipzVch5EPdn~MScVnsp3j5V6ktXCUNWNd7kpzuJUG7Y1nPh-33zRF0xNRBkNHAhESpI3GtRv5x58D~gGUXuv5k~FBJu7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description: ""
}, {
    id: 2,
    url: "https://s3-alpha-sig.figma.com/img/c532/6728/4e1dee14b549efb168f3a770c9650916?Expires=1658102400&Signature=cHltPMpoudc7pdUj6-taXmW-cnbJd9y9ArkT3PcOHFpnf82inBqtJDatOzq2Kmnjo5Tzwlh0vHOAmJUQiWya6DQ0Y14xESYDhY7gMvE0bKEA8SYGvtMGB1ANWRu~cWeVIil-o9d8veY0Vp9b~5ldn3pNfjKhfYKKmZpQCjNEFWgRTPXbQHCPPR4OJUq1QbqiznIx9fqk7SP164FWTAvCgaNcvxuIdh-uhp4aoDoMrAgKfzqOMvE73K8y6ipzVch5EPdn~MScVnsp3j5V6ktXCUNWNd7kpzuJUG7Y1nPh-33zRF0xNRBkNHAhESpI3GtRv5x58D~gGUXuv5k~FBJu7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description: "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" + "                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n" + "                    in\n" + "                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" + "                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n" + "                    id\n" + "                    est laborum"
}, {
    id: 3,
    url: "https://s3-alpha-sig.figma.com/img/c532/6728/4e1dee14b549efb168f3a770c9650916?Expires=1658102400&Signature=cHltPMpoudc7pdUj6-taXmW-cnbJd9y9ArkT3PcOHFpnf82inBqtJDatOzq2Kmnjo5Tzwlh0vHOAmJUQiWya6DQ0Y14xESYDhY7gMvE0bKEA8SYGvtMGB1ANWRu~cWeVIil-o9d8veY0Vp9b~5ldn3pNfjKhfYKKmZpQCjNEFWgRTPXbQHCPPR4OJUq1QbqiznIx9fqk7SP164FWTAvCgaNcvxuIdh-uhp4aoDoMrAgKfzqOMvE73K8y6ipzVch5EPdn~MScVnsp3j5V6ktXCUNWNd7kpzuJUG7Y1nPh-33zRF0xNRBkNHAhESpI3GtRv5x58D~gGUXuv5k~FBJu7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description: ""
}, {
    id: 4,
    url: "https://s3-alpha-sig.figma.com/img/c532/6728/4e1dee14b549efb168f3a770c9650916?Expires=1658102400&Signature=cHltPMpoudc7pdUj6-taXmW-cnbJd9y9ArkT3PcOHFpnf82inBqtJDatOzq2Kmnjo5Tzwlh0vHOAmJUQiWya6DQ0Y14xESYDhY7gMvE0bKEA8SYGvtMGB1ANWRu~cWeVIil-o9d8veY0Vp9b~5ldn3pNfjKhfYKKmZpQCjNEFWgRTPXbQHCPPR4OJUq1QbqiznIx9fqk7SP164FWTAvCgaNcvxuIdh-uhp4aoDoMrAgKfzqOMvE73K8y6ipzVch5EPdn~MScVnsp3j5V6ktXCUNWNd7kpzuJUG7Y1nPh-33zRF0xNRBkNHAhESpI3GtRv5x58D~gGUXuv5k~FBJu7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description: ""
}, {
    id: 5,
    url: "https://s3-alpha-sig.figma.com/img/c532/6728/4e1dee14b549efb168f3a770c9650916?Expires=1658102400&Signature=cHltPMpoudc7pdUj6-taXmW-cnbJd9y9ArkT3PcOHFpnf82inBqtJDatOzq2Kmnjo5Tzwlh0vHOAmJUQiWya6DQ0Y14xESYDhY7gMvE0bKEA8SYGvtMGB1ANWRu~cWeVIil-o9d8veY0Vp9b~5ldn3pNfjKhfYKKmZpQCjNEFWgRTPXbQHCPPR4OJUq1QbqiznIx9fqk7SP164FWTAvCgaNcvxuIdh-uhp4aoDoMrAgKfzqOMvE73K8y6ipzVch5EPdn~MScVnsp3j5V6ktXCUNWNd7kpzuJUG7Y1nPh-33zRF0xNRBkNHAhESpI3GtRv5x58D~gGUXuv5k~FBJu7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description: "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" + "                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n" + "                    in\n" + "                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" + "                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n" + "                    id\n" + "                    est laborum"
},]

export const Slider = ({onToggleButtonHandler, isVisible}) => {
    return (
        <>
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
                {
                    dataImg.map((el, index) => (
                        <SwiperSlide key={index}>
                            {({isActive}) => (<div>
                                {isActive ? null : <div className={s.wrapper_cover}></div>}
                                <CardSlider img={el.url}
                                            description={el.description}
                                            onToggleButtonHandler={onToggleButtonHandler}
                                            isVisible={isVisible}
                                />
                            </div>)}
                        </SwiperSlide>))
                }
            </Swiper>
        </>
    );
};