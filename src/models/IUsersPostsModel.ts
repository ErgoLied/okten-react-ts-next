import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export interface IUsersPostsModel extends IUserModel {
    posts: IPostModel[];
}