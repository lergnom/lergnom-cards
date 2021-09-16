import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Buttons} from "../common/components/Buttons";
import {Checkboxs} from "../common/components/Checkboxs";
import {Inputs} from "../common/components/Inputs";
import {LoginPage} from "../../../02-features/f1-auth/a1-login/l1-loginPage/LoginPage";
import {RegistrationPage} from "../../../02-features/f1-auth/a2-register/r1-registrationPage/RegistrationPage";
import {Profile} from "../../../02-features/f1-auth/a3-profile/Profile";
import {PasswordRecovery} from "../../../02-features/f1-auth/a4-passwordRecovery/PasswordRecovery";
import {PageNotFound} from "../../../02-features/f1-auth/a5-pageNotFound/PageNotFound";

export const PATH = {
    HOME: '/',
    SUPER_BUTTON: '/button',
    SUPER_CHECKBOX: '/checkbox',
    SUPER_INPUT: '/input',
    LOGIN_PAGE: '/login',
    LOGIN_SIGN_UP: '/registration',
    PROFILE_PAGE: '/profile',
    PASSWORD_RECOVERY_PAGE: '/pass',
    PAGE_NOT_FOUND: '/404',
};

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.HOME}/>}/>
                <Route path={'#/login'} exact render={() => <Redirect to={PATH.LOGIN_PAGE}/>}/>
                <Route path={'#/registration'} exact render={() => <Redirect to={PATH.LOGIN_PAGE}/>}/>
                <Route path={'#/profile'} exact render={() => <Redirect to={PATH.PROFILE_PAGE}/>}/>
                <Route path={'#/pass'} exact render={() => <Redirect to={PATH.PASSWORD_RECOVERY_PAGE}/>}/>
                <Route path={'#/404'} exact render={() => <Redirect to={PATH.PAGE_NOT_FOUND}/>}/>
                <Route path={PATH.SUPER_BUTTON} render={() => <Buttons/>}/>
                <Route path={PATH.SUPER_CHECKBOX} render={() => <Checkboxs/>}/>
                <Route path={PATH.SUPER_INPUT} render={() => <Inputs/>}/>
                <Route path={PATH.LOGIN_PAGE} render={() => <LoginPage/>}/>
                <Route path={PATH.LOGIN_SIGN_UP} render={() => <RegistrationPage/>}/>
                <Route path={PATH.PROFILE_PAGE} render={() => <Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY_PAGE} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.PAGE_NOT_FOUND} render={() => <PageNotFound/>}/>
            </Switch>
        </>
    );
};