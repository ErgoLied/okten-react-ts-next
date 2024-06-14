import {AxiosResponse} from "axios";

import {axiosInstance} from "./config.api.service";
import {ICommentModel} from "../models/ICommentModel";

export const commentService = {
    getAll: async (): Promise<AxiosResponse<ICommentModel[]>> => {
        return await axiosInstance.get<ICommentModel[]>('/comments');
    }
}