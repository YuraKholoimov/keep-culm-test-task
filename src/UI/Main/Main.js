import React from 'react';
import {Tabs} from "../../Common/Tabs/Tabs";

export const Main = ({onToggleButtonHandler}) => {
    return (
        <main>
            <Tabs onToggleButtonHandler={onToggleButtonHandler} />
        </main>
    );
};