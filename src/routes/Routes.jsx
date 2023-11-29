import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../pages/Home/Home';
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/ContactUs";
import TouristHome from "../pages/Dashboard/TouristHome/UserHome";
import Dashboard from "../layouts/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import AddTourPackage from "../pages/Dashboard/AddTourPackage/AddTourPackage";
import ManageTourPackages from "../pages/Dashboard/ManageTourPackages/ManageTourPackages";
import UpdateTourPackage from "../pages/Dashboard/UpdateTourPackage/UpdateTourPackage";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllPackages from "../pages/AllPackages/AllPackages";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import MyBookings from "../pages/MyBookings/MyBookings";
import ErrorElement from "../pages/ErrorPage/ErrorElement";
import NotFound from "../pages/NotFoundPage/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        // ErrorBoundary: <NotFound />,
        children: [
            {
                path: '*',
                element: <NotFound></NotFound>
            },
            {
                index: true,
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
                path: 'tours',
                element: <AllPackages />
            },
            {
                path: 'tours/:id',
                element: <PackageDetails />,
                loader: ({ params }) => fetch(`http://localhost:5005/tours/${params.id}`)
            },
            {
                path: 'contact',
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <NotFound />,
        children: [
            {
                path: '*',
                element: <ErrorElement />
            },
            // normal user / tourist routes
            {
                path: 'userHome',
                element: <TouristHome />
            },
            {
                path: 'bookings',
                element: <MyBookings />
            },

            // admin only routes
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'AddTourPackage',
                element: <AdminRoute><AddTourPackage /></AdminRoute>
            },
            {
                path: 'manageTourPackages',
                element: <AdminRoute><ManageTourPackages /></AdminRoute>
            },
            {
                path: 'updateTourPackage/:id',
                element: <AdminRoute><UpdateTourPackage /></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5005/tours/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
        ]
    }
])