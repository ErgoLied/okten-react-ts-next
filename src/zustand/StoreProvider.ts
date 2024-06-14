import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {create} from "zustand";
import {ICommentModel} from "../models/ICommentModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void,

        favouriteUser: IUserModel | null,
        setFavouriteUser: (user: IUserModel) => void
    },

    postStore: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void
    },

    commentStore: {
        allComments: ICommentModel[],
        loadComments: (comments: ICommentModel[]) => void
    }
}

export const useStore = create<StoreType>()((set) => {
    return {
        userStore: {
            allUsers: [],
            loadUsers: (users) => {
                return set((state: StoreType) => {
                    return {...state, userStore: {...state.userStore, allUsers: users}};
                })
            },

            favouriteUser: null,
            setFavouriteUser: (user) => {
                return set((state: StoreType) => {
                    return {...state, userStore: {...state.userStore, favouriteUser: user}};
                })
            }
        },

        postStore: {
            allPosts: [],
            loadPosts: (posts) => {
                return set((state: StoreType) => {
                    return {...state, postStore: {...state.postStore, allPosts: posts}}
                });
            }
        },

        commentStore: {
            allComments: [],
            loadComments: (comments) => {
                return set((state: StoreType) => {
                    return {...state, commentStore: {...state.commentStore, allComments: comments}}
                })
            }
        }
    }
})