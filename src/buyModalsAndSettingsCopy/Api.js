import axios from "axios"



const instance = axios.create({
    baseURL: `https://dry-forest-56016.herokuapp.com/shop`
});

export const api = {
    shopBuyApi(order) {
        return instance.post(`shop/by`,
            {
               order
            })
    }


}



