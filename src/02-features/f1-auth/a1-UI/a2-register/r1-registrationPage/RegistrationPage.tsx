import React, {useState} from "react";
import SuperButton from "../../../../../03-common/components/SuperButton/SuperButton";
import {SuperInput} from "../../../../../03-common/components/SuperInput/SuperInput";
import s from "./RegistrationPage.module.css";

export const RegistrationPage = () => {
    const [editInputType, setEditInputType] = useState('password');
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

    const onMouseOverHandler = () => {
        setEditInputType('text');
    };

    const onMouseOutHandler = () => {
        setEditInputType('password');
    };


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
                            {/*<SuperInput changeType="password"/>*/}
                            <SuperInput changeType={editInputType}
                                        value={pass}
                                        onChangeText={setPass}
                                        error={errorPass}
                                        onClick={resetErrors}
                                        disabled={isFetching}/>
                            <span className={s.eye} onMouseOver={onMouseOverHandler}
                                                              onMouseOut={onMouseOutHandler}>fd</span>

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