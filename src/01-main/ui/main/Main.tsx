import React, {useEffect} from "react";
import {HashRouter} from "react-router-dom";
import {Header} from "../header/Header";
import {Routes} from "../routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../bll/store";
import {initializeApp} from "../../../02-features/00-initialize/app-reducer";
import {PreLoader} from "../../../common/components/PreLoader/PreLoader";

export const Main = () => {

    const dispatch = useDispatch();
    const isInitialized = useSelector<AppStoreType, boolean>(state => state.app.initialized);

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!isInitialized) {
        return <PreLoader/>;
    }


    return (
        <>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </>
    );
};