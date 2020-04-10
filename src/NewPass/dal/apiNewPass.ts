import axios from 'axios'

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
})

export const apiNewPass = {
    addNewPass(token:string,password: string) {
        return instance.post(`auth/set-new-password`,
            {
                resetPasswordToken: token,
                password: password
            }).then(res => res.data.success)
    }
}