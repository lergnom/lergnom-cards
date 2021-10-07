import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./user-reducer";
import {appReducer} from "../../02-features/00-initialize/app-reducer";
import {authReducer} from "../../02-features/f1-auth/a2-BLL/auth-reducer";

const rootReducer = combineReducers({
    users: userReducer,
    app: appReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev
