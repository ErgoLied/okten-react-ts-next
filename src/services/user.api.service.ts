import {AxiosResponse} from "axios";

import {axiosInstance} from "./config.api.service";
import {IUserModel} from "../models/IUserModel";

export const userService = {
    getAll: async (): Promise<AxiosResponse<IUserModel[]>> => {
        return await axiosInstance.get<IUserModel[]>('/users');
    }
}