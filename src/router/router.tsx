import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import {CommentsPage, PostsCommentsPage, PostsPage, UsersPage, UsersPostsPage} from "../pages";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {index: true, element: <UsersPage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'usersPosts', element: <UsersPostsPage/>},
            {path: 'postsComments', element: <PostsCommentsPage/>},
        ]
    }
];
export const routerConfig = createBrowserRouter(routes);