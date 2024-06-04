import {ICarWithAuthModel} from "./ICarWithAuthModel";
import {IPageModel} from "./IPageModel";

export interface ICarPaginatedModel {
    total_items: number;
    total_pages: number;
    prev: IPageModel | null;
    next: IPageModel | null;
    items: ICarWithAuthModel[]
}