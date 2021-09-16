import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/',
})


export const requestApi = {
       get() {
        return instance.get(``);
    }
}