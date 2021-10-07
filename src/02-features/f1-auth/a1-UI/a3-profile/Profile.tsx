import React from "react";
import s from "./anypage.module.css";

export const Profile = () => {
    return (
        <>
            <div className={s.pageWrapper}>
                <div className={s.pageContainer}>
                    <div className={s.pageHeader}>
                        <p className={s.pageLogo}>
                            <span>Profile</span> page
                        </p>
                    </div>
                    <div className={s.pageHr}></div>
                    The page is still under construction :(

                </div>
            </div>
        </>
    );
};