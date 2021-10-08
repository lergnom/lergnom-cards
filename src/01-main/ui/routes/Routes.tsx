import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Buttons} from "../../../common/components/Buttons";
import {Checkboxs} from "../../../common/components/Checkboxs";
import {Inputs} from "../../../common/components/Inputs";
import {RegistrationPage} from "../../../02-features/f1-auth/a1-UI/a2-register/r1-registrationPage/RegistrationPage";
import {PasswordRecovery} from "../../../02-features/f1-auth/a1-UI/a4-passwordRecovery/PasswordRecovery";
import {PageNotFound} from "../../../02-features/f1-auth/a1-UI/a5-pageNotFound/PageNotFound";
import {TableUsers} from "../TableUsers";
import {LoginPageContainer} from "../../../02-features/f1-auth/a1-UI/a1-login/l1-loginPage/LoginPageContainer";
import {ProfileContainer} from "../../../02-features/f1-auth/a1-UI/a3-profile/ProfileContainer";

export const PATH = {
    HOME: '/',
    SUPER_BUTTON: '/button',
    SUPER_CHECKBOX: '/checkbox',
    SUPER_INPUT: '/input',
    LOGIN_PAGE: '/login',
    LOGIN_SIGN_UP: '/registration',
    PROFILE_PAGE: '/profile',
    PASSWORD_RECOVERY_PAGE: '/pass',
    TABLE_USER: '/table',
    PAGE_NOT_FOUND: '/404',
};

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.HOME}/>}/>
                <Route path={PATH.SUPER_BUTTON} render={() => <Buttons/>}/>
                <Route path={PATH.SUPER_CHECKBOX} render={() => <Checkboxs/>}/>
                <Route path={PATH.SUPER_INPUT} render={() => <Inputs/>}/>
                <Route path={PATH.LOGIN_PAGE} render={() => <LoginPageContainer/>}/>
                <Route path={PATH.LOGIN_SIGN_UP} render={() => <RegistrationPage/>}/>
                <Route path={PATH.PROFILE_PAGE} render={() => <ProfileContainer/>}/>
                <Route path={PATH.PASSWORD_RECOVERY_PAGE} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.PAGE_NOT_FOUND} render={() => <PageNotFound/>}/>
                <Route path={PATH.TABLE_USER} render={() => <TableUsers/>}/>
                <Route path={'*'} render={() => <PageNotFound/>}/>

            </Switch>
        </>
    );
};