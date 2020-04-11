import axios from 'axios'

const instance = axios.create({
    baseURL: `https://dry-forest-56016.herokuapp.com/shop/`
})


export const apiShopTable = {
    getProducts() {
        return instance.get(``).then((res) => {console.log(res)
            return res.data.success})
    }
}