import React from "react";
import s from "./ProfileContainer.module.css";

export const ProfileContainer: React.FC = () => {
    return (
        <>
            <div className={s.leftPanel}>

                <div className={s.logo}>
                    <div className={s.title}>CARD PACKS</div>
                    <div className={s.subtitle}>закрепление навыков</div>
                </div>

                <div className={s.userWrap}>
                    <div className={s.userPhoto}>
                        <img src="img/avatars/avatar-128.jpg" alt="Avatar"/>
                    </div>
                    <div className={s.userName}>
                        Asmolovskiy
                        <br/>
                        Anton
                    </div>
                </div>

                <div className={s.navigation}>
                    <div className={s.navigationTitle}>
                        Колоды карт:
                    </div>
                    <ul>
                        <li><a href="all" data-item="all" className="left-menu active">Мои</a></li>
                        <li><a href="new" data-item="new" className="left-menu">Новый
                            <div className={s.badge}>7</div>
                        </a></li>
                        <li><a href="work" data-item="work" className="left-menu">В работе</a></li>
                        <li><a href="final" data-item="final" className="left-menu">Завершенный</a></li>
                        <li><a href="arc" data-item="arc" className="left-menu">Архив</a></li>
                    </ul>
                </div>

                <div className={s.navigation}>
                    <ul>
                        <li>
                            <a href="#">Выход</a>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
};