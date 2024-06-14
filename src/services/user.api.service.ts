import {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {axiosInstance} from "./config.api.service";

export const userService = {
    getUsers: async (): Promise<AxiosResponse<IUserModel[]>> => {
        return await axiosInstance.get<IUserModel[]>('/users');
    }
}
