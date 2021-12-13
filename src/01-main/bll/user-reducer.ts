import {Dispatch} from "react";
import {requestApi} from "../dal/api";

export type InitStateType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string
}

const initState: InitStateType = {
    _id: "123",
    email: "mail@mail.ru",
    isAdmin: false,
    name: 'lergnom',
    rememberMe: true,
};
type ActionsType = ReturnType<typeof getUsers>

export const userReducer = (state: InitStateType = initState, action: ActionsType): Array<InitStateType> => { // fix any
    switch (action.type) {
        case "GET_USERS": {
            const users = action.users;
            return [...action.users];
        }
        default:
            return [state];
    }
};

const getUsers = (users: Array<InitStateType>) => ({type: "GET_USERS", users} as const);

export const setUsers = () => (dispatch: Dispatch<any>) => {
    requestApi.get()
        .then(res => {
            if (res.status === 200) {
                dispatch(getUsers(res.data.users));
            }
        });
};