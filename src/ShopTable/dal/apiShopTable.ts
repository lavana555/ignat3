import axios from 'axios'

const instance = axios.create({
    baseURL: `https://dry-forest-56016.herokuapp.com/shop`
})
export type ProductType = {
    _id: string
    productName:string
    price: number
    productType: string|null
    rating: number
    created: string
    updated: string
    __v: number
    id: string
}
type GetProductsResponseType = {
    products:Array<ProductType>
    page: number
    pageCount:number
    productTotalCount:number
    minPrice:number
    maxPrice:number
}

type AddProductResponseType = {
    addedProduct:ProductType
    success: boolean
}
type DeletedProductResponseType = {
    addedProduct:ProductType
    success: boolean
}
type UpdatedProductResponseType = {
    updatedProduct:ProductType
    success: boolean
}

export const apiShopTable = {
    getProducts() {
        return instance.get<GetProductsResponseType>(``).then((res) => res.data)
    },
    addProduct(productName: string, price: number, productType: string) {
        return instance.post<AddProductResponseType>(``,{product: {
                productName: productName,
                price: price,
                productType: productType,
            }}).then((res) => res.data.addedProduct)
    },
    delProduct(id: string) {
        return instance.delete<DeletedProductResponseType>(`?id=${id}`).then((res) => res.data)
    },
    updateProduct(productName:string,price:number,id: string) {
        return instance.put<UpdatedProductResponseType>(``,{product:{productName:productName,price:price,id:id}}).then((res) => res.data)
    }
}