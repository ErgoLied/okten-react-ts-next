import {IUserModel} from "./IUserModel";

export interface IUserResponseModel {
    users: IUserModel[];
    total: number;
    skip: number;
    limit: number;
}