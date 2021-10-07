import React, {useState} from "react";
import s from "./LoginPage.module.css";
import {SuperInput} from "../../../../../common/components/SuperInput/SuperInput";
import SuperButton from "../../../../../common/components/SuperButton/SuperButton";

export const LoginPage = () => {


    const [pass, setPass] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    // const isFetching = useSelector<AppStoreType, boolean>(state => state.register.isFetch);
    const isFetching = false;


    //Define error on the form
    let error: Array<string>;
    const errorLogin = login ? '' : 'add your email';
    const errorPass = pass ? '' : 'add your password';

    const resetErrors = () => {
        // dispatch(returnServerError([]));
    };


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
                            <label className={s.formLabel}>Repeat Password: </label>
                            {/*<SuperInput changeType="password"/>*/}
                            <SuperInput changeType={'password'}
                                        value={pass}
                                        onChangeText={setPass}
                                        error={errorPass}
                                        onClick={resetErrors}
                                        disabled={isFetching}/>
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