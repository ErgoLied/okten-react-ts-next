import {AxiosResponse} from "axios";

import {axiosInstance} from "./config.api.service";
import {IUserModel} from "../models/IUserModel";

export const userService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => axiosInstance.get('/users'),
}
