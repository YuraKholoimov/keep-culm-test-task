import {Header} from "./UI/Header/Header";
import {Footer} from "./UI/Footer/Footer";
import {Main} from "./UI/Main/Main";
import {Modal} from "./Common/Modal/Modal";
import {useState} from "react";

import s from './app.module.css';

function App() {
    const [isVisible, setIsVisible] = useState(false)

    const onToggleButtonHandler = () => setIsVisible(!isVisible)

    return (
        <div className={s.app}>
            <Modal onToggleButtonHandler={onToggleButtonHandler} isVisible={isVisible}/>
            <Header/>
            <Main onToggleButtonHandler={onToggleButtonHandler} />
            <Footer/>
        </div>
    );
}

export default App;
