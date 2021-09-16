import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./common/components/styles.module.css";

export const Header = () => {
    return (
        <>
            <ul className={s.ulWrapper}>
                <h3>Pages:</h3>
                <li>
                    <NavLink to={PATH.SUPER_BUTTON} activeClassName={s.active}>
                        Login
                    </NavLink>
                </li>

                <li>
                    <NavLink to={PATH.SUPER_INPUT} activeClassName={s.active}>
                        Registaration
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.SUPER_CHECKBOX} activeClassName={s.active}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.SUPER_CHECKBOX} activeClassName={s.active}>
                        Password recovery
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.SUPER_CHECKBOX} activeClassName={s.active}>
                        404
                    </NavLink>
                </li>
            </ul>
            <ul className={s.ulWrapper}>
                <h3>Components:</h3>
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