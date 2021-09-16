import {combineReducers, createStore} from "redux";
import {userReducer} from "./user-reducer";

const reducers = combineReducers({
    users: userReducer
});

const store = createStore(reducers);

export default store;

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
