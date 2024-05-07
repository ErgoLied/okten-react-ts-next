import {BasicResponseModel} from './BasicResponseModel';

export interface IProduct{
    id: number;
    title: string;
    price: number;
}

export interface ProductModel extends BasicResponseModel {
    products: IProduct[];
}