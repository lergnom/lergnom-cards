import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/',
})


export const requestApi = {
    post(value: boolean) {
        return instance.post(`test/`, {success: value});
    },
    get() {
        return instance.get(``);
    }
}