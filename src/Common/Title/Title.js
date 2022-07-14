import React from 'react';
import s from "./title.module.css";

export const Title = () => {
    return (
        <div className={s.title}>
            <h2>Lorem ipsum dolor <span className={s.italic}>sit</span> amet</h2>
        </div>
    );
};