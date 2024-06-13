import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";
import {IUserModel} from "./IUserModel";

export interface IPostsCommentsModel extends IPostModel{
    wroteBy: IUserModel;
    comments: ICommentModel[];
}