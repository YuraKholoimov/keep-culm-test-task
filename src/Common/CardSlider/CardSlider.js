import s from './cardSlider.module.css'
import Arrow from "../Arrows/Arrow";

export const CardSlider = ({onToggleButtonHandler, isVisible, img, description}) => {
    return (
        <div className={ isVisible ? `${s.container2}` : `${s.container}`}>
            <div className={s.wrapper}>
                <div className={isVisible ? `${s.img_slider2}` : `${s.img_slider}`}>

                    {/*----- IMG of the Slider -----*/}
                    <a href="#" className={s.slider} onClick={(e) => {
                        e.preventDefault()
                        onToggleButtonHandler()
                    }}>
                        <img src={img} alt="img"/>
                    </a>
                </div>
                {isVisible && <Arrow/>}
            </div>

            {/*----- Description -----*/}
            {isVisible && <div className={s.description}>
                <p>{description}</p>
            </div>}
        </div>
    )
}