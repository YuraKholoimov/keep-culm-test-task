import s from "./modal.module.css";

import {CloseButton} from "../CloseButton/CloseButton";
import {Slider} from "../Slider/Slider";
import React from "react";
import {dataImg} from "../../BLL/Store/store";

export const Modal = ({onToggleButtonHandler, isVisible }) => {
    return (
        <div className={s.modal} style={{display: isVisible ? "" : "none"}}>
            <div href="#" className={s.closeButton}>
                <CloseButton onToggleButtonHandler={onToggleButtonHandler}/>
            </div>

            <Slider dataImg={dataImg} onToggleButtonHandler={onToggleButtonHandler} isVisible={isVisible}/>

            {/*<div className={s.description}>*/}
            {/*    <p>*/}
            {/*        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation*/}
            {/*        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit*/}
            {/*        in*/}
            {/*        voluptate velit esse cillum dolore eu fugiat nulla pariatur.*/}
            {/*        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim*/}
            {/*        id*/}
            {/*        est laborum*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
};




