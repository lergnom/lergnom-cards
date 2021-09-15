import React from "react";
import s from "./styles.module.css";
import {SuperCheckbox} from "./SuperCheckBox/SuperCheckBox";


export const Checkboxs = () => {
    return (
        <>
            <ul className={s.ulWrapper}>
                Checkbox:
                <li>
                  <SuperCheckbox checked></SuperCheckbox>
                </li>
            </ul>
        </>
    );
};



