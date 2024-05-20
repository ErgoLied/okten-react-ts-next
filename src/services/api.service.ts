import axios, {AxiosResponse} from "axios";
import IPostModel from "../models/IPostModel";

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

const axiosInstance = axios.create({
    baseURL,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

const createPost = async (post: IPostModel):Promise<AxiosResponse<IPostModel>> => await axiosInstance.post('', post);

export {createPost}
