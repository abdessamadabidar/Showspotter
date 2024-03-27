// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MoviesPage from "./pages/MoviesPage.tsx";
import SeriesPage from "./pages/SeriesPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import AnimePage from "./pages/AnimePage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

import {store} from "./state/store.ts";
import {Provider} from "react-redux";
import MoviePage from "./pages/MoviePage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import SeriePage from "./pages/SeriePage.tsx";
import ByCountryPage from "./pages/ByCountryPage.tsx";
import ByCategoryPage from "./pages/ByCategoryPage.tsx";



const router  = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/movies',
        element: <MoviesPage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/series',
        element: <SeriesPage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/anime',
        element: <AnimePage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/login',
        element: <LoginPage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/signup',
        element: <SignUpPage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/movie',
        element: <MoviePage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/profile',
        element: <ProfilePage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/contact',
        element: <ContactPage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/serie',
        element: <SeriePage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/country/united-state',
        element: <ByCountryPage />,
        errorElement: <PageNotFound />
    },
    {
        path: '/category/action',
        element: <ByCategoryPage />,
        errorElement: <PageNotFound />
    },

]);



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <NextUIProvider>
                <RouterProvider router={router} />
            </NextUIProvider>
        </Provider>
    </React.StrictMode>,
)