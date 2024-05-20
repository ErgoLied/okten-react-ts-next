import {AxiosResponse} from "axios";

import {axiosInstance} from "./config.api.service";
import {IPostModel} from "../models/IPostModel";

export const postService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => axiosInstance.get('/posts'),
    getPostsOfUser: (userID: string): Promise<AxiosResponse<IPostModel[]>> => axiosInstance.get(`/users/${userID}/posts`),
}
