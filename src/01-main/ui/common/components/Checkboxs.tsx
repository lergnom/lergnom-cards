import React from "react";
import s from "./styles.module.css";
import {SuperCheckbox} from "./SuperCheckBox/SuperCheckBox";


export const Checkboxs = () => {
    return (
        <>
            <ul className={s.ulWrapper}>
                Checkbox:
                <li>
                    <SuperCheckbox checked> checked</SuperCheckbox>
                </li>
                <li>
                    <SuperCheckbox checked={false}>unchecked</SuperCheckbox>
                </li>

                {/*<li>*/}
                {/*  Недоработанная компонента  <SuperCheckboxToggle checked>toggle</SuperCheckboxToggle> */}
                {/*</li>*/}
            </ul>
        </>
    );
};



