import s from './app.module.css';
import {Header} from "./UI/Header/Header";
import {Footer} from "./UI/Footer/Footer";
import {Main} from "./UI/Main/Main";
import React from "react";
import {useState} from "react";
import {CloseButton} from "./Common/CloseButton/CloseButton";
import {Slider} from "./Common/Slider/Slider";

function App() {

    const [isVisible, setIsVisible] = useState(false)
    console.log(isVisible)
    const onToggleButtonHandler = () => setIsVisible(!isVisible)

    return (
        <div className={s.app}>

            <div className={s.modal} style={{display: isVisible ? "" : "none"}}>
                <div href="#" className={s.closeButton}>
                    <CloseButton onToggleButtonHandler={onToggleButtonHandler}/>
                </div>

                <Slider onToggleButtonHandler={onToggleButtonHandler} isVisible={isVisible}/>

                <div className={s.description}>
                    <p>
                        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id
                        est laborum
                    </p>
                </div>
            </div>

            <Header/>
            <Main onToggleButtonHandler={onToggleButtonHandler} />
            <Footer/>
        </div>
    );
}

export default App;
