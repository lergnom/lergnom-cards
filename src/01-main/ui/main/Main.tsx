import React, {useEffect} from "react";
import {HashRouter} from "react-router-dom";
import {Header} from "../header/Header";
import {Routes} from "../routes/Routes";
import {requestApi} from "../../dal/api";

export const Main = () => {
    useEffect(() => {
        console.log('useEffect');
        requestApi.get()
            .then(res => {
                console.log(res);
            });
    }, []);

    return (
        <>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </>
    );
};