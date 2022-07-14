import s from './closer.module.css'

export const CloseButton = ({onToggleButtonHandler}) => {
    const onClickHandler = (e) => {
        e.preventDefault()
        onToggleButtonHandler()
    }
    return (
        <div className={s.closer_container}>
            <a href="#" className={s.closer}
               onClick={onClickHandler}>
            </a>
        </div>
    );
};