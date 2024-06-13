import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export interface IUserPostsModel extends IUserModel{
    posts: IPostModel[];
}