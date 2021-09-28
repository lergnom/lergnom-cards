import React, {useState} from "react";
import s from "./styles.module.css";
import {SuperCheckbox} from "./SuperCheckBox/SuperCheckBox";
import {SuperCheckboxToggle} from "./SuperCheckBox/SuperCheckBoxToggle";


export const Checkboxs = () => {
    const [check, setCheck] = useState<boolean>(false);
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

                <li>
                    <SuperCheckboxToggle onChangeChecked={() => {
                        setCheck(!check);
                    }} checked={check}>toggle</SuperCheckboxToggle>
                </li>
            </ul>
        </>
    );
};



