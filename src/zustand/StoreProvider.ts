import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {create} from "zustand";

type StoreType = {
    userSlice: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void,

        favouriteUser: IUserModel | null,
        setFavouriteUser: (user: IUserModel) => void
    },

    postSlice: {
        allPosts: IPostModel[]
    }
}

export const useStore = create<StoreType>()((set) => {
    return {
        userSlice: {
            allUsers: [],
            loadUsers: (users) => {
                return set((state: StoreType) => {
                    return {...state, userSlice: {...state.userSlice, allUsers: users}};
                })
            },

            favouriteUser: null,
            setFavouriteUser: (user) => {
                return set((state: StoreType) => {
                    return {...state, userSlice: {...state.userSlice, favouriteUser: user}};
                })
            }
        },

        postSlice: {
            allPosts: []
        }
    }
})