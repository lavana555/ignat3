import axios from "axios"

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
});

export const apiLogin = {
    addLogin(email, password, rememberMe) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    authMe(token){
        return instance.post(`/auth/me`, {token})
    }
}