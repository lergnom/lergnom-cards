import React from "react";
import {HashRouter} from "react-router-dom";
import {Header} from "../header/Header";
import {Routes} from "../routes/Routes";

export const Main = () => {


    return (
        <>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </>
    );
};