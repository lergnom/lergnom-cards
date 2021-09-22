import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
});


export const requestApi = {
    get() {
        return instance.get(``);
    },
    authLogin() {
        return instance.post("auth/login", {email: "lergnpm@mail.ru", password: "12345678", rememberMe: true});
    },
    authRequest() {
        return instance.post("auth/me");
    },
    deleteAuth() {
        return instance.delete("auth/me");

    },
};