import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./user-reducer";

const rootReducer = combineReducers({
    users: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev
