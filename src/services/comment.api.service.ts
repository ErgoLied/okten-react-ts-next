import {AxiosResponse} from "axios";

import {axiosInstance} from "./config.api.service";
import {ICommentModel} from "../models/ICommentModel";

export const commentService = {
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => axiosInstance.get('/comments'),
    getCommentsOfPost: (postID: string): Promise<AxiosResponse<ICommentModel[]>> => axiosInstance.get(`/posts/${postID}/comments`),
}