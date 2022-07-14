import {Lorem} from "../../UI/Main/Pages/Lorem/Lorem";
import {Ipsum} from "../../UI/Main/Pages/Ipsum/Ipsum";
import {useReducer} from "react";

import s from "./tabs.module.css"
import {Title} from "../Title/Title";


export function Tabs({onToggleButtonHandler}) {

    const tabsContentState = [
        {id: "Lorem", component: <Lorem/>, isActive: true},
        {id: "Ipsum", component: <Ipsum onToggleButtonHandler={onToggleButtonHandler}/>, isActive: false},
    ]

    const reducer = (state, action) => {
        switch (action.type) {
            case "SHOW":
                return [...state.map((el) => el.id === action.id ? {...el, isActive: true}
                    : {
                        ...el, isActive: false
                    })]
            default:
                throw new Error("Error")
        }
    }

    const [value, dispatch] = useReducer(reducer, tabsContentState);

    const onClickHandler = (e) => {
        const currentTarget = e.currentTarget.dataset.tab
        dispatch({type: "SHOW", id: currentTarget})
    }

    return (
        <div className={s.containerTab}>
            <div className={s.tabHeader}>
                <ul>
                    <li className={value[0].isActive ? s.active : ''}
                        data-tab={"Lorem"}
                        onClick={onClickHandler}
                    >Lorem
                    </li>
                    <li className={value[1].isActive ? s.active : ''}
                        data-tab={"Ipsum"}
                        onClick={onClickHandler}
                    >Ipsum
                    </li>
                </ul>
            </div>

            <Title/>

            {value.map(item => item.isActive && item.component)}

        </div>
    );
}
