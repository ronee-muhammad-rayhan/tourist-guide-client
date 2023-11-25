import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../pages/Home/Home';
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'register',
                element: <Register />
            },
        ],
    },
])