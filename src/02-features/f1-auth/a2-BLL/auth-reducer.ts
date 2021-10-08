import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../01-main/bll/store";
import {authAPI, StatusCode, UserType} from "../a3-DAL/authApi";

let initialState = {
    user: null as null | UserType,
    isFetch: false,
    error: [] as Array<string>,
};

type AuthReducerType = typeof initialState;

type ActionTypes = authUserActionType | fetchOnServerActionType | returnServerErrorActionType;

export type ThunkType<TActions extends Action> = ThunkAction<Promise<void>,
    AppStoreType,
    unknown,
    TActions>

type LoginData = {
    email: string
    password: string
    rememberMe: boolean
}


export const authReducer = (state: AuthReducerType = initialState, action: ActionTypes): AuthReducerType => {
    switch (action.type) {
        case "AUTH/LOGIN/AUTH_USER": {
            return {...state, user: action.user};
        }
        case "AUTH/FETCH": {
            return {...state, isFetch: action.fetch};
        }
        case "AUTH/SERVER_ERROR": {
            return {...state, error: action.error};
        }
        default:
            return {...state};
    }
};

// actions
export const authUser = (user: UserType | null) => ({type: "AUTH/LOGIN/AUTH_USER", user} as const);
const fetchOnServer = (fetch: boolean) => ({type: "AUTH/FETCH", fetch} as const);
export const returnServerError = (error: Array<string>) => ({type: "AUTH/SERVER_ERROR", error} as const);

//actions types
type authUserActionType = ReturnType<typeof authUser>
type fetchOnServerActionType = ReturnType<typeof fetchOnServer>
type returnServerErrorActionType = ReturnType<typeof returnServerError>

//thunk
export const requestOnUserLogin = (payload: LoginData): ThunkType<fetchOnServerActionType | authUserActionType | returnServerErrorActionType> => async (dispatch) => {
    dispatch(fetchOnServer(true));
    authAPI.loginUser(payload)
        .then(response => {
            if (response.status === StatusCode.success200) {
                dispatch(authUser(response.data));
            } else if (response.status === StatusCode.fail) {
                dispatch(returnServerError([response.data.error]));
            }
        })
        .catch(() => {
            dispatch(returnServerError(['Some error on Server. We work with it. :(']));
        })
        .finally(() => {
                dispatch(fetchOnServer(false));
            }
        );
};


export const checkUserIsAuth = (): ThunkType<fetchOnServerActionType | authUserActionType> => async (dispatch) => {
    try {
        dispatch(fetchOnServer(true));
        const response = await authAPI.authUser();
        dispatch(authUser(response.data));
        dispatch(fetchOnServer(false));
    } catch (err) {
        console.log('checkUserisAuth', err);
    } finally {
        dispatch(fetchOnServer(false));
    }
};

export const requestOnLogoutUser = (): ThunkType<fetchOnServerActionType | authUserActionType> => async (dispatch) => {
    try {
        dispatch(fetchOnServer(true));
        await authAPI.logoutUser();
        dispatch(authUser(null));
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(fetchOnServer(false));
    }

};


// export const logoutThunk = (dispatch: Dispatch) => {
//     dispatch(setLoading(true));
//     profileAPI.logout()
//         .then(() => {
//             dispatch(setAuth(false));
//             dispatch(authUserAC(null));
//         })
//         .catch(error => {
//             dispatch(setError(error.response.data.error));
//             console.log(error.response.data.error);
//         })
//         .finally(() => dispatch(setLoading(false)));
// };

