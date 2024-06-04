import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";

export const routerConfig= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]
    }
]);