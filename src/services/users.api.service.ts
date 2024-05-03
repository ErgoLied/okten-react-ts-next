import axios, {AxiosResponse} from "axios";
import {IUserResponseModel} from "../models/IUserResponseModel";
import {IPostResponseModel} from "../models/IPostResponseModel";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/users',
    headers: {'Content-Type': 'application/json'}
});

const getAllUsers = (): Promise<AxiosResponse<IUserResponseModel>> => {
    return axiosInstance.get('');
}

const getAllPostsByUserId = (userId: number): Promise<AxiosResponse<IPostResponseModel>> => {
    return axiosInstance.get('/' + userId + '/posts');
}

export {getAllUsers, getAllPostsByUserId}
