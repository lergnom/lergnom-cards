import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

export const Header = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to={PATH.SUPER_BUTTON}>
                        Button example
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.SUPER_CHECKBOX}>
                        CheckBox example
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.SUPER_INPUT}>
                        Input example
                    </NavLink>
                </li>
            </ul>
        </>
    );
};