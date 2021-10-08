import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "../../02-features/00-initialize/app-reducer";
import {authReducer} from "../../02-features/f1-auth/a2-BLL/auth-reducer";
import {packsListReducer} from "../../02-features/f2-packlist/p2-BLL/packList-reducer";

const rootReducer = combineReducers({
    // users: userReducer,
    app: appReducer,
    auth: authReducer,
    packList: packsListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev
