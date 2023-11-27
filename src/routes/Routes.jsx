import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../pages/Home/Home';
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/ContactUs";

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
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'contact',
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
        ],
    },
])