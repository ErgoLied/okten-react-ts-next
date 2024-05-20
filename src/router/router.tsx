import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsOfUserPage from "../pages/PostsOfUserPage";
import CommentsOfPostPage from "../pages/CommentsOfPostPage";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <div>error</div>,
        children: [
            {index: true, element: <UsersPage/>},
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: ':id', element: <PostsOfUserPage/>}
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {path: ':id', element: <CommentsOfPostPage/>}
                ]
            },
            {path: 'comments', element: <CommentsPage/>},
        ]
    }
]);