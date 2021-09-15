import React from "react";
import {HashRouter} from "react-router-dom";
import {Header} from "./Header";
import {Routes} from "./Routes";

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