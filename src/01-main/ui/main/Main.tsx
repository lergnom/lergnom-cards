import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Header} from "../header/Header";
import {Routes} from "../routes/Routes";

export const Main = () => {


    return (
        <>

            <BrowserRouter>
                <Header/>
                <Routes/>
            </BrowserRouter>
        </>
    );
};