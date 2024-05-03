import {IPostModel} from "./IPostModel";

export interface IPostResponseModel {
    posts: IPostModel[];
    total: number;
    skip: number;
    limit: number;
}
