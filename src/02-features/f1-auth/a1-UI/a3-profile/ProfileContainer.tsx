import React from "react";
import s from "./ProfileContainer.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../01-main/bll/store";
import {UserType} from "../../a3-DAL/authApi";
import {Profile} from "./Profile";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../../01-main/ui/routes/Routes";
import {requestOnLogoutUser} from "../../a2-BLL/auth-reducer";

export const ProfileContainer: React.FC = () => {
    const user = useSelector<AppStoreType, UserType | null>(state => state.auth.user);
    const dispatch = useDispatch();

    const onLogoutHandler = () => dispatch(requestOnLogoutUser());

    if (!user) return <Redirect to={PATH.LOGIN_PAGE}/>;
    return (
        <>
            <Profile title={"CARD PACK"} subtitle={"закрепление навыков"} avatar={user?.avatar} userName={user?.name}>
                <ul>
                    <li><a onClick={onLogoutHandler}>Выход</a></li>
                </ul>
            </Profile>


            <div className={s.mainWrapper}>
                <div>
                    Тут будет таблица
                </div>
            </div>


        </>
    );
};