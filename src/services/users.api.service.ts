import axios, {AxiosResponse} from "axios";
import IUserModel from "../models/IUserModel";

const baseURL = 'https://jsonplaceholder.typicode.com/users'

const axiosInstance = axios.create({
    baseURL,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

const createUser = (user: IUserModel):Promise<AxiosResponse<IUserModel>> => axiosInstance.post('', user);

export {createUser}
