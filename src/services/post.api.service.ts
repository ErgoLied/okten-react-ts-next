import {AxiosResponse} from "axios";

import {axiosInstance} from "./config.api.service";
import {IPostModel} from "../models/IPostModel";

export const postService = {
    getAll: async (): Promise<AxiosResponse<IPostModel[]>> => {
        return await axiosInstance.get<IPostModel[]>('/posts');
    }
}