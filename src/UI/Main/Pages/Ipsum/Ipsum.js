import {Slider} from "../../../../Common/Slider/Slider";


export const Ipsum = ({onToggleButtonHandler, isVisible}) => {
    return (
        <section>
            <Slider onToggleButtonHandler={onToggleButtonHandler}/>
        </section>
    );
};
