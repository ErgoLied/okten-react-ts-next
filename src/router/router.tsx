import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import UsersComponent from "../components/Users/UsersComponent";
import PostsComponent from "../components/Posts/PostsComponent";
import CommentsComponent from "../components/Comments/CommentsComponent";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <div>error</div>,
        children: [
            {index: true, element: <UsersComponent/>},
            {path: 'users', element: <UsersComponent/>},
            {path: 'posts', element: <PostsComponent/>},
            {path: 'comments', element: <CommentsComponent/>},
        ]
    }
]);