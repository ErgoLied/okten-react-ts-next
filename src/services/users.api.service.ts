import axios, {AxiosResponse} from 'axios';
import {IUserResponseModel} from "../models/IUserResponseModel";

const baseURL = 'https://dummyjson.com/users';

const axiosInstance = axios.create({
    baseURL,
    headers: {'Content-Type': 'application/json'}
});

export const getAllUsers = (): Promise<AxiosResponse<IUserResponseModel>> => axiosInstance.get('');
