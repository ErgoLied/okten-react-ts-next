import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UsersPostsPage from "../pages/UsersPostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsCommentsPage from "../pages/PostsCommentsPage";

export const routerConfig = createBrowserRouter([
    {
        path: '', element: <App/>, children: [
            {index: true, element:<UsersPage/>},
            {path: 'users', element:<UsersPage/>},
            {path: 'posts', element:<PostsPage/>},
            {path: 'comments', element:<CommentsPage/>},
            {path: 'usersPosts', element:<UsersPostsPage/>},
            {path: 'postsComments', element:<PostsCommentsPage/>}
        ]
    }
]);