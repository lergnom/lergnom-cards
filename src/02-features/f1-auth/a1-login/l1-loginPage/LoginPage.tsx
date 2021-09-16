import React from "react";
import s from "./LoginPage.module.css";
import {SuperInput} from "../../../../01-main/ui/common/components/SuperInput/SuperInput";
import SuperButton from "../../../../01-main/ui/common/components/SuperButton/SuperButton";

export const LoginPage = () => {
    return (
        <>
            <div className={s.pageWrapper}>
                <div className={s.pageContainer}>
                    <div className={s.pageHeader}>
                        <p className={s.pageLogo}>
                            <span>Login</span> page
                        </p>
                    </div>
                    <div className={s.pageHr}></div>
                    <form>
                        <div className={s.formStyle}>
                            <label className={s.formLabel}>Login: </label>
                            <SuperInput/>
                        </div>

                        <div className={s.formStyle}>
                            <label className={s.formLabel}>Password: </label>
                            <SuperInput changeType="password"/>
                        </div>

                        <div className={s.formStyle}>
                            <SuperButton btnPrimary>
                                LogIn
                            </SuperButton>
                        </div>

                    </form>

                </div>
            </div>
        </>
    );
};