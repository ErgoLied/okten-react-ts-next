import {AxiosResponse} from "axios";
import {ICommentModel} from "../models/ICommentModel";
import {axiosInstance} from "./config.api.service";

export const commentService ={
    getComments: async(): Promise<AxiosResponse<ICommentModel[]>> => {
        return await axiosInstance.get<ICommentModel[]>('/comments');
    }
}