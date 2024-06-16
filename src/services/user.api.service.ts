import {axiosInstance} from "./config.api.service";
import {urls} from "../constants/urls";
import {IUser} from "../models/IUser";

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    },

    getByID: async (id: string): Promise<IUser> => {
        const response = await axiosInstance.get<IUser>(urls.users.byID(id));
        return response.data;
    }
}