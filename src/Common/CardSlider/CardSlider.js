import s from './cardSlider.module.css'

export const CardSlider = ({onToggleButtonHandler, isVisible}) => {
    console.log(isVisible)
    return (
        <div className={s.container}>
            <div className={isVisible ? `${s.wrapper2}` : `${s.wrapper}`}
            >
                <a href="#" className={s.slider} onClick={(e) => {
                    e.preventDefault()
                    onToggleButtonHandler()
                }}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/c532/6728/4e1dee14b549efb168f3a770c9650916?Expires=1658102400&Signature=cHltPMpoudc7pdUj6-taXmW-cnbJd9y9ArkT3PcOHFpnf82inBqtJDatOzq2Kmnjo5Tzwlh0vHOAmJUQiWya6DQ0Y14xESYDhY7gMvE0bKEA8SYGvtMGB1ANWRu~cWeVIil-o9d8veY0Vp9b~5ldn3pNfjKhfYKKmZpQCjNEFWgRTPXbQHCPPR4OJUq1QbqiznIx9fqk7SP164FWTAvCgaNcvxuIdh-uhp4aoDoMrAgKfzqOMvE73K8y6ipzVch5EPdn~MScVnsp3j5V6ktXCUNWNd7kpzuJUG7Y1nPh-33zRF0xNRBkNHAhESpI3GtRv5x58D~gGUXuv5k~FBJu7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt="img"/>
                </a>
            </div>
        </div>
    )
}