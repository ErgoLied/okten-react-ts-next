import {IPost} from "../models/IPost";
import {axiosInstance} from "./config.api.service";
import {urls} from "../constants/urls";

export const postService = {
    getAll: async (): Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },

    getByID: async (id: string): Promise<IPost> => {
        const response = await axiosInstance.get<IPost>(urls.posts.byID(id));
        return response.data;
    }
}