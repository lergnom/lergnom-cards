import React from "react";
import s from "./Profile.module.css";

type ProfileTypeProps = {
    title?: string,
    subtitle?: string,
    avatar?: string,
    userName?: string
}

export const Profile: React.FC<ProfileTypeProps> = ({title, subtitle, avatar, userName, children}) => {
    return (
        <div className={s.leftPanel}>

            <div className={s.logo}>
                <div className={s.title}>{title}</div>
                <div className={s.subtitle}>{subtitle}</div>
            </div>

            <div className={s.userWrap}>
                <div className={s.userPhoto}>
                    <img src={avatar} alt={userName}/>
                </div>
                <div className={s.userName}>
                    {userName}
                </div>
            </div>

            <div className={s.navigation}>
                <div className={s.navigationTitle}>
                    Your possibilities
                </div>
                {children}
            </div>
        </div>
    );
};