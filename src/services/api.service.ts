import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const userService = {
    getAll: async (): Promise<AxiosResponse<IUserModel[]>> => {
        return await axiosInstance.get<IUserModel[]>('/users');
    }
}

const postService = {
    getAll: async (): Promise<AxiosResponse<IPostModel[]>> => {
        return await axiosInstance.get<IPostModel[]>('/posts');
    }
}

const commentService = {
    getAll: async (): Promise<AxiosResponse<ICommentModel[]>> => {
        return await axiosInstance.get<ICommentModel[]>('/comments');
    }
}

export {userService, postService, commentService}