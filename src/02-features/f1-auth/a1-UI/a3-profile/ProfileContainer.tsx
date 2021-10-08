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
            </div>
        </>
    );
};