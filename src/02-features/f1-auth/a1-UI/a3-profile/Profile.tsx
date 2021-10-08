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
                    Колоды карт:
                </div>
                {children}
                {/*<ul>*/}
                {/*    <li><a href="all" data-item="all" className="left-menu active">Мои</a></li>*/}
                {/*    <li><a href="new" data-item="new" className="left-menu">Новый*/}
                {/*        <div className={s.badge}>7</div>*/}
                {/*    </a></li>*/}
                {/*    <li><a href="work" data-item="work" className="left-menu">В работе</a></li>*/}
                {/*    <li><a href="final" data-item="final" className="left-menu">Завершенный</a></li>*/}
                {/*    <li><a href="arc" data-item="arc" className="left-menu">Архив</a></li>*/}
                {/*</ul>*/}
            </div>


        </div>
    );
};