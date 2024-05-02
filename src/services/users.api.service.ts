import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {IUserResponseModel} from "../models/IUserResponseModel";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/users',
    headers: {'Content-Type': 'application/json'}
});

const getAllUsers = (): Promise<AxiosResponse<IUserResponseModel>> => {
    return axiosInstance.get('');
}

const getAllPostsByUserId = (userId: number): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get('/' + userId + '/posts');
}

export {getAllUsers, getAllPostsByUserId}
