import React from "react";
import SuperButton from "../../../../01-main/ui/common/components/SuperButton/SuperButton";
import { SuperInput } from "../../../../01-main/ui/common/components/SuperInput/SuperInput";
import s from "./RegistrationPage.module.css";

export const RegistrationPage = () => {
    return (
        <>
            <div className={s.pageWrapper}>
                <div className={s.pageContainer}>
                    <div className={s.pageHeader}>
                        <p className={s.pageLogo}>
                            <span>SignUp</span> page
                        </p>
                    </div>
                    <div className={s.pageHr}></div>
                    <form>
                        <div className={s.formStyle}>
                            <label className={s.formLabel}>Login: </label>
                            <SuperInput/>
                        </div>

                        <div className={s.formStyle}>
                            <label className={s.formLabel}>Your Password: </label>
                            <SuperInput changeType="password"/>
                        </div>
                        <div className={s.formStyle}>
                            <label className={s.formLabel}>Repeat Password: </label>
                            <SuperInput changeType="password"/>
                        </div>

                        <div className={s.formStyle}>
                            <SuperButton btnPrimary>
                                SignUp
                            </SuperButton>
                        </div>

                    </form>

                </div>
            </div>
        </>
    );
};