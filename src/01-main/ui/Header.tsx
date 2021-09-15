import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./common/components/styles.module.css";

export const Header = () => {
    return (
        <>
            <ul className={s.ulWrapper}>
                <li>
                    <NavLink to={PATH.SUPER_BUTTON} activeClassName={s.active}>
                        Button example
                    </NavLink>
                </li>

                <li>
                    <NavLink to={PATH.SUPER_INPUT} activeClassName={s.active}>
                        Input example
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.SUPER_CHECKBOX} activeClassName={s.active}>
                        CheckBox example
                    </NavLink>
                </li>
            </ul>
        </>
    );
};