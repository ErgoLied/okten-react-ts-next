import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {Context} from './context/ContextProvider';
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import HeaderComponent from "./components/Header/HeaderComponent";
import {ICommentModel} from "./models/ICommentModel";
import {userService} from "./services/user.api.service";
import {postService} from "./services/post.api.service";
import {commentService} from "./services/comment.api.service";
import FavouriteUserComponent from "./components/FavouriteUserComponent/FavouriteUserComponent";

function App() {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);
    const [favUserState, setFavUserState] = useState<IUserModel | null>(null);

    useEffect(() => {
        userService.getUsers().then(({data}) => setUsers(data));
        postService.getPosts().then(({data}) => setPosts(data));
        commentService.getComments().then(({data}) => setComments(data));
    }, []);

    const setFavouriteUser = (user: IUserModel) => {
        setFavUserState(user);
    }

    return (
        <>
            <HeaderComponent/>
            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                    setFavouriteUser: (user: IUserModel) => setFavouriteUser(user)
                },
                postStore: {
                    allPosts: posts
                },
                commentStore: {
                    allComments: comments
                }
            }}>

                <FavouriteUserComponent user={favUserState}/>
                <Outlet/>

            </Context.Provider>
        </>
    );
}

export default App;
