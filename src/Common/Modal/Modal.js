import s from "./modal.module.css";

import {CloseButton} from "../CloseButton/CloseButton";
import {Slider} from "../Slider/Slider";
import React from "react";
import {dataImg} from "../../BLL/Store/store";


export const Modal = ({onToggleButtonHandler, isVisible}) => {
    return (
        <div className={s.modal} style={{display: isVisible ? "" : "none"}}>
            <div href="#" className={s.closeButton}>
                <CloseButton onToggleButtonHandler={onToggleButtonHandler}/>
            </div>

            <Slider dataImg={dataImg} onToggleButtonHandler={onToggleButtonHandler} isVisible={isVisible}/>

        </div>
    );
};




