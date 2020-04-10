import axios from 'axios'

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
})

export const apiRecovery = {
    sendMail(email: string) {
        return instance.post(`auth/forgot`,
            {
                email: email,
                html1: "<a href='http://localhost:3000/reset-password/",
                html2: "'>reset-password-link</a>"
            }).then(res => res.data.success)
    }
}