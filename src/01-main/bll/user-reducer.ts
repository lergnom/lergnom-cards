export type InitStateType = {
    id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string
}

const initState: InitStateType = {
    id: "123",
    email: "mail@mail.ru",
    isAdmin: false,
    name: 'lergnom',
    rememberMe: true,
};
type ActionsType = ReturnType<typeof getUsers>

export const userReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case "GET_USERS":
        default:
            return state;
    }
};

export const getUsers = (isActive: boolean) => ({type: "GET_USERS", isActive} as const);