import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
});


export const requestApi = {
    get() {
        return instance.get(`/auth/`);
    },
    authLogin() {
        return instance.post("auth/login", {email: "nya-admin@nya.nya", password: "1qazxcvBG", rememberMe: true});
    },
    authRequest() {
        return instance.post("auth/me");
    },
    deleteAuth() {
        return instance.delete("auth/me");

    },
};