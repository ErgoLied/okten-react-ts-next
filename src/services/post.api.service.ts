import {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {axiosInstance} from "./config.api.service";

export const postService = {
    getPosts: async(): Promise<AxiosResponse<IPostModel[]>> => {
        return await axiosInstance.get<IPostModel[]>('/posts');
    }
}
