import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../../01-main/bll/store";
import {requestOnUserLogin, returnServerError} from "../../../a2-BLL/auth-reducer";
import {LoginPage} from "./LoginPage";
import {PreLoader} from "../../../../../03-common/components/PreLoader/PreLoader";
import {UserType} from "../../../a3-DAL/authApi";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../../../01-main/ui/routes/Routes";

export const LoginPageContainer: React.FC = () => {
    let error: Array<string>;
    const isFetching = useSelector<AppStoreType, boolean>(state => state.auth.isFetch);
    const serverError = useSelector<AppStoreType, Array<string>>(state => state.auth.error);
    const user = useSelector<AppStoreType, UserType | null>(state => state.auth.user);
    const isInitialized = useSelector<AppStoreType, boolean>(state => state.app.initialized);
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

    if (user && isInitialized) {
        return <Redirect to={PATH.PROFILE_PAGE}/>;
    }


    return (
        <div style={{display: 'flex', justifyContent: "center", marginTop: "30px"}}>
            {isFetching && <PreLoader/>}
            <LoginPage isFetching={isFetching} onSubmitHandler={formHandler} resetErrors={resetErrors}
                       serverError={serverError}/>


        </div>
    );
};