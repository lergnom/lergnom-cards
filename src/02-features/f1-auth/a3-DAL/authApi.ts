import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    baseURL: "http://localhost:7542/2.0/",
});


export type ResponseType<D = {}> = {
    status: StatusCode
    statusText: string
    Data: D
}

export enum StatusCode {
    success = 201,
    fail = 400
}

export type AddedUserType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    __v: number
}

export type ErrorType = {
    error: string,
    email: string,
    in: string,
}

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


export const authAPI = {
    loginUser(payload: { email: string, password: string, rememberMe: boolean }) {
        return instance.post<ResponseType<UserType>>("auth/login", payload);
    },
    registerUser(payload: { email: string, passord: string }) {
        return instance.post<ResponseType<AddedUserType | ErrorType>>(`auth/register`, payload)
            .then(res => res
            ).catch(rej => rej.response);
    },
    authUser() {
        return instance.post('auth/me');
    },
    updateUser(payload: { newName: string, avatar: string }) {
        return instance.put('auth/me', payload);
    },
    logoutUser() {
        return instance.delete('auth/me');
    },
    forgotPassword(payload: { email: string, from: 'string', message: string }) {
        return instance.post("/auth/forgot", payload);
    },
    newPassword(payload: { password: string, resetPasswordToken: string }) {
        return instance.post("/auth/set-new-password", payload);
    }
};


