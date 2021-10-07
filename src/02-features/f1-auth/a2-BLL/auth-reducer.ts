import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../01-main/bll/store";
import {UserType} from "../a3-DAL/authApi";

let initialState = {
    user: null as null | UserType,
    isFetch: false,
    error: [] as Array<string>,
};

type AuthReducerType = typeof initialState
type ActionTypes = authUserActionType | fetchOnServerActionType | returnServerErrorActionType

export type ThunkType<TActions extends Action> = ThunkAction<Promise<void>,
    AppStoreType,
    unknown,
    TActions>

export const authReducer = (state: AuthReducerType = initialState, action: ActionTypes): AuthReducerType => {
    switch (action.type) {
        default:
            return {...state};
    }
};

// actions
export const authUser = (user: UserType | null) => ({type: "SIGN-IN/AUTH-USER", user} as const);
const fetchOnServer = (fetch: boolean) => ({type: "SIGN-IN/LOADER", fetch} as const);
export const returnServerError = (error: Array<string>) => ({type: "SIGN-UP/SERVER_ERROR", error} as const);

//actions types
type authUserActionType = ReturnType<typeof authUser>
type fetchOnServerActionType = ReturnType<typeof fetchOnServer>
type returnServerErrorActionType = ReturnType<typeof returnServerError>

//thunk
