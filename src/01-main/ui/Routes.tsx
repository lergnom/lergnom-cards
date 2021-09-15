import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Buttons} from "./common/components/Buttons";
import {Checkboxs} from "./common/components/Checkboxs";
import {Inputs} from "./common/components/Inputs";

export const PATH = {
    HOME: '/',
    SUPER_BUTTON: '/button',
    SUPER_CHECKBOX: '/checkbox',
    SUPER_INPUT: '/input',
};

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.HOME}/>}/>
                <Route path={PATH.SUPER_BUTTON} render={() => <Buttons/>}/>
                <Route path={PATH.SUPER_CHECKBOX} render={() => <Checkboxs/>}/>
                <Route path={PATH.SUPER_INPUT} render={() => <Inputs/>}/>
            </Switch>
        </>
    );
};