import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../../01-main/bll/store";
import {requestOnUserLogin, returnServerError} from "../../../a2-BLL/auth-reducer";
import {LoginPage} from "./LoginPage";

export const LoginPageContainer: React.FC = () => {
    let error: Array<string>;
    const isFetching = useSelector<AppStoreType, boolean>(state => state.auth.isFetch);
    const serverError = useSelector<AppStoreType, Array<string>>(state => state.auth.error);
    const dispatch = useDispatch();

    const resetErrors = () => {
        dispatch(returnServerError([]));
    };

    const formHandler = (email: string, password: string, rememberMe: boolean) => {
        error = [];
        password.length < 8 && error.push("Password should be more  7 symbols\n");
        email === '' && error.push("Error your login field empty\n");
        if (!error.length) {
            dispatch(requestOnUserLogin({email, password, rememberMe}));
        } else {
            dispatch(returnServerError(error));
        }
    };

    return (
        <>
            <LoginPage isFetching={isFetching} onSubmitHandler={formHandler} resetErrors={resetErrors}
                       serverError={serverError}/>
        </>
    );
};