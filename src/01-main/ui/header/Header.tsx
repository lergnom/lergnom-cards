import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import s from "../../../03-common/components/styles.module.css";

export const Header = () => {
    return (
        <>
            <ul className={s.ulWrapper}>
                <h3>Pages:</h3>
                <li>
                    <NavLink to={PATH.LOGIN_PAGE} activeClassName={s.active}>
                        SignIn
                    </NavLink>
                </li>

                <li>
                    <NavLink to={PATH.LOGIN_SIGN_UP} activeClassName={s.active}>
                        SignUp
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.PROFILE_PAGE} activeClassName={s.active}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.PASSWORD_RECOVERY_PAGE} activeClassName={s.active}>
                        UnPass
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.PAGE_NOT_FOUND} activeClassName={s.active}>
                        404
                    </NavLink>
                </li>
            </ul>
            {/*<ul className={s.ulWrapper}>*/}
            {/*    <h3>Components:</h3>*/}
            {/*    <li>*/}
            {/*        <NavLink to={PATH.SUPER_BUTTON} activeClassName={s.active}>*/}
            {/*            Button*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}

            {/*    <li>*/}
            {/*        <NavLink to={PATH.SUPER_INPUT} activeClassName={s.active}>*/}
            {/*            Input*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <NavLink to={PATH.SUPER_CHECKBOX} activeClassName={s.active}>*/}
            {/*            CheckBox*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            {/*<ul className={s.ulWrapper}>*/}
            {/*    <h3>Example:</h3>*/}
            {/*    <li>*/}
            {/*        <NavLink to={PATH.TABLE_USER} activeClassName={s.active}>*/}
            {/*            Redux/Reducer/Thunk*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}

            {/*</ul>*/}

        </>
    );
};