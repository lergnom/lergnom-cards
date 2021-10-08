import React, {useState} from "react";
import s from "./LoginPage.module.css";
import {SuperInput} from "../../../../../03-common/components/SuperInput/SuperInput";
import SuperButton from "../../../../../03-common/components/SuperButton/SuperButton";
import {ToggleCheckBox} from "../../../../../03-common/components/CheckBoxToggle/ToggleCheckBox";

type LoginPageTypeProps = {
    serverError: Array<string>
    isFetching: boolean
    resetErrors: () => void
    onSubmitHandler: (email: string, password: string, rememberMe: boolean) => void
}

export const LoginPage = (
    {
        serverError,
        isFetching,
        resetErrors,
        onSubmitHandler,
    }: LoginPageTypeProps) => {

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const errorEmail = email ? '' : 'add your email';
    const errorPassword = password ? '' : 'add your password';

    const changeCheckedOnRemember = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked);
    };


    const sendUpDataFromForm = () => {
        onSubmitHandler(email, password, rememberMe);
    };

    const errorsJSX = serverError.map(err => {
        return (
            <li key={err}>
                {err}
            </li>
        );
    });

    return (
        <>
            <div className={s.pageWrapper}>
                <div className={s.pageContainer}>
                    <div className={s.pageHeader}>
                        <p className={s.pageLogo}>
                            <span>Login</span> page
                        </p>
                    </div>
                    <div className={s.pageHr}/>
                    <form>
                        <div className={s.formStyle}>
                            <label className={s.formLabel}>Login: </label>
                            <SuperInput value={email} onChangeText={setEmail} onClick={resetErrors}
                                        disabled={isFetching} error={errorEmail}
                            />
                        </div>

                        <div className={s.formStyle}>
                            <label className={s.formLabel}>Repeat Password: </label>
                            {/*<SuperInput changeType="password"/>*/}
                            <SuperInput changeType={'password'}
                                        value={password}
                                        onChangeText={setPassword}
                                        onClick={resetErrors}
                                        disabled={isFetching}
                                        error={errorPassword}
                            />
                        </div>
                        <div className={s.formStyle}>
                            <div className={s.flexLine}>
                                <label className={s.formLabel}>Remember Me: </label>
                                <ToggleCheckBox colorBackround="#2d93f0" title={"rememberMe :)"}
                                                checked={rememberMe} onChange={changeCheckedOnRemember}/>
                            </div>

                        </div>

                        <div className={s.formStyle}>
                            <ul>
                                {errorsJSX}
                            </ul>
                        </div>


                        <div className={s.formStyle}>
                            <SuperButton btnPrimary onClick={sendUpDataFromForm}>
                                LogIn
                            </SuperButton>
                        </div>


                    </form>

                </div>
            </div>
        </>
    );
};