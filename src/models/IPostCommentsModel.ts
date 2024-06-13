import {IPostModel} from "./IPostModel";
import {IUserModel} from "./IUserModel";
import {ICommentModel} from "./ICommentModel";

export interface IPostCommentsModel extends IPostModel{
    wroteBy: IUserModel;
    comments: ICommentModel[];
}