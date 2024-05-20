import axios, {AxiosResponse} from "axios";

import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const apiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => axiosInstance.get('/users'),
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => axiosInstance.get('/posts'),
    getPostsOfUser: (userID: string): Promise<AxiosResponse<IPostModel[]>> => axiosInstance.get(`/users/${userID}/posts`),
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => axiosInstance.get('/comments'),
    getCommentsOfPost: (postID: string): Promise<AxiosResponse<ICommentModel[]>> => axiosInstance.get(`/posts/${postID}/comments`),
}

export {apiService}