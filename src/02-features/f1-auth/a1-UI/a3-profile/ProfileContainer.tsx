import React from "react";
import s from "./ProfileContainer.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../01-main/bll/store";
import {UserType} from "../../a3-DAL/authApi";
import {Profile} from "./Profile";

export const ProfileContainer: React.FC = () => {

    const user = useSelector<AppStoreType, UserType | null>(state => state.auth.user);


    return (
        <>
            <Profile title={"CARD PACK"} subtitle={"закрепление навыков"} avatar={user?.avatar} userName={user?.name}>
                <ul>
                    <li><a href="">Выход</a></li>
                </ul>
            </Profile>


            <div className={s.mainWrapper}>
                <div>
                    sdfsdfsdf
                </div>
            </div>


        </>
    );
};