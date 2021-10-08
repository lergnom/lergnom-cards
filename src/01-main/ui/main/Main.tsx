import React, {useEffect} from "react";
import {Redirect} from "react-router-dom";
import {PATH} from "../routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../bll/store";
import {initializeApp} from "../../../02-features/00-initialize/app-reducer";
import {PreLoader} from "../../../03-common/components/PreLoader/PreLoader";
import {UserType} from "../../../02-features/f1-auth/a3-DAL/authApi";

export const Main = () => {

    const dispatch = useDispatch();
    const isInitialized = useSelector<AppStoreType, boolean>(state => state.app.initialized);
    const user = useSelector<AppStoreType, UserType | null>(state => state.auth.user);

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!isInitialized) {
        return <PreLoader/>;
    }

    if (!user) {
        return <Redirect to={PATH.LOGIN_PAGE}/>;
    }

    if (user) {
        return <Redirect to={PATH.PROFILE_PAGE}/>;
    }

    return (
        <>
            {/*<HashRouter>*/}
            {/*<Header/>*/}
            {/*<Routes/>*/}
            {/*</HashRouter>*/}
        </>
    );
};