import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {Context} from './context/ContextProvider';
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {commentService, postService, userService} from "./services/api.service";
import HeaderComponent from "./components/Header/HeaderComponent";
import {ICommentModel} from "./models/ICommentModel";

function App() {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        userService.getUsers().then(({data}) => setUsers(data));
        postService.getPosts().then(({data}) => setPosts(data));
        commentService.getComments().then(({data}) => setComments(data));
    }, []);

    return (
        <>
            <HeaderComponent/>
            <Context.Provider value={{
                userStore: {
                    allUsers: users
                },
                postStore: {
                    allPosts: posts
                },
                commentStore: {
                    allComments: comments
                }
            }}>

                <Outlet/>

            </Context.Provider>
        </>
    );
}

export default App;
