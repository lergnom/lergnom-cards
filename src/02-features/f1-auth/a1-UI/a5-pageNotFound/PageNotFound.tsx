import React from "react";
import s from "./anypage.module.css";

export const PageNotFound = () => {
    return (
        <>
            <div className={s.pageWrapper}>
                <div className={s.pageContainer}>
                    <div className={s.pageHeader}>
                        <p className={s.pageLogo}>
                            <span>404</span> page
                        </p>
                    </div>
                    <div className={s.pageHr}></div>
                    The page is still under construction :(

                </div>
            </div>
        </>
    );
};