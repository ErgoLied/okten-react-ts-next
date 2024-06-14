import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import {useStore} from "./zustand/StoreProvider";
import {userService} from "./services/user.api.service";
import {postService} from "./services/post.api.service";
import {commentService} from "./services/comment.api.service";

function App() {
    const {userStore, postStore, commentStore} = useStore();

    useEffect(() => {
        userService.getAll().then(({data}) => userStore.loadUsers(data));
        postService.getAll().then(({data}) => postStore.loadPosts(data));
        commentService.getAll().then(({data}) => commentStore.loadComments(data));
    }, []);

    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
}

export default App;
