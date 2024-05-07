import {ProductModel} from "../models/ProductModel";

export const getAllProducts = ():Promise<ProductModel> => {
    return fetch('https://dummyjson.com/products')
        .then((res) => res.json())
}