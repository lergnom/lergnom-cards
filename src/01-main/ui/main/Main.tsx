import React, {useEffect} from "react";
import {HashRouter} from "react-router-dom";
import {Header} from "../header/Header";
import {Routes} from "../routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../bll/store";
import {InitStateType, setUsers} from "../../bll/user-reducer";
import {TableUsers} from "../TableUsers";

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