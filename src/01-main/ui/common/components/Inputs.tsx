import React from "react";
import {SuperInput} from "./SuperInput/SuperInput";
import s from "./Inputs.module.css";

export const Inputs = () => {
    return (
        <>

            <ul className={s.ulWrapper}>
                Inputs:
                <li>
                    <SuperInput value={'text'}/>
                </li>
                <li>
                    <SuperInput value={'text'}/>
                </li>
            </ul>

        </>
    );
};