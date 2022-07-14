import s from './cardSlider.module.css'

export const CardSlider = ({onToggleButtonHandler, isVisible, img, description}) => {
    return (
        <div className={s.container}>
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
            </div>

            {/*----- Description -----*/}
            {isVisible && <div className={s.description}>
                <p>{description}</p>
            </div>}
        </div>
    )
}