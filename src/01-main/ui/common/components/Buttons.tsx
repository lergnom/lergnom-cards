import React from "react";
import s from "./Inputs.module.css";
import SuperButton from "./SuperButton/SuperButton";


export const Buttons = () => {
    return (
        <>
            <ul className={s.ulWrapper}>
                Buttons:
                <li>
                    <SuperButton>
                        default
                    </SuperButton>
                </li>
                <li>
                    <SuperButton btnPrimary>
                        Primary
                    </SuperButton>
                </li>
                <li>
                    <SuperButton disabled>
                        Disabled
                    </SuperButton>
                </li>
            </ul>
        </>
    );
};