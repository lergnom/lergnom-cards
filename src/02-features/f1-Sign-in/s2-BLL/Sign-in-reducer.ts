import {Dispatch} from "redux";
import {signAPI} from "../s3-DAL/SignAPI";

const initialState = {
    user: null as null | UserType,
    loading: false,
    error: '',
    userId: 'none',
    // isAuth: false,
};

export const signInReducer = (state: SignInStateType = initialState, action: ActionsType): SignInStateType => {
    switch (action.type) {
        // case "SIGN-IN/CHECK_IS_AUTH": {
        //     return {...state, isAuth: action.isAuth};
        // }
        case "SIGN-IN/USER_ID": {
            return {...state, userId: action.userId};
        }
        case "SIGN-IN/AUTH-USER":
            return {...state, user: action.user};
        case "SIGN-IN/LOADER":
            return {...state, loading: action.loading};
        case "SIGN-IN/ERROR":
            return {...state, error: action.error};
        default:
            return state;
    }
};

// actions
export const authUserAC = (user: UserType | null) => ({type: "SIGN-IN/AUTH-USER", user} as const);
const loaderAC = (loading: boolean) => ({type: "SIGN-IN/LOADER", loading} as const);
export const errorRequestAC = (error: string) => ({type: "SIGN-IN/ERROR", error} as const);
//action lergnom
type GetUserIdActionType = ReturnType<typeof getUserId>;
const getUserId = (userId: string) => ({type: 'SIGN-IN/USER_ID', userId} as const);
type CheckIsAuthActionType = ReturnType<typeof setIsAuth>
export const setIsAuth = (isAuth: boolean) => ({type: 'SIGN-IN/CHECK_IS_AUTH', isAuth} as const);

//thunk lergnom no need
export const checkUserIsAuth = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        const response = await signAPI.authMe();
        if (response.status === 200) {
            dispatch(authUserAC(response.data));
            dispatch(setIsAuth(true));
        }
    } catch (err) {
    }
};


// thunks
export const userAuthRequestTC = (loginData: LoginData) => (dispatch: Dispatch) => {
    dispatch(loaderAC(true));
    signAPI.authRequest(loginData)
        .then(res => {
            dispatch(authUserAC(res.data));
            dispatch(getUserId(res.data._id));

        })
        .catch(e => {
            const errorMessage = e.response?.data?.error || "Unknown error!";
            dispatch(errorRequestAC(errorMessage));
        })
        .finally(() => dispatch(loaderAC(false)));
};
// types

type SignInStateType = typeof initialState

export type UserType = {
    avatar: string,
    created: string,
    email: string,
    isAdmin: boolean,
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    updated: string,
    verified: boolean,
    __v: number,
    _id: string,
    deviceTokens: any
}

type LoginData = {
    email: string
    password: string
    rememberMe: boolean
}

type ActionsType = ReturnType<typeof authUserAC>
    | ReturnType<typeof loaderAC>
    | ReturnType<typeof errorRequestAC>
    | GetUserIdActionType
    | CheckIsAuthActionType