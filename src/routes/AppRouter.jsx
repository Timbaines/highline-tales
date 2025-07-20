import { createBrowserRouter, RouterProvider, ScrollRestoration
} from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import ActivitiesPage from '@/pages/ActivitiesPage';
import ActivityPage from '@/pages/ActivityPage';
import GearPage from '@/pages/GearPage';
import GalleryPage from '@/pages/GalleryPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <MainLayout />
                <ScrollRestoration />
            </>
        ),
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'activities',
                element: <ActivitiesPage />
            },
            {
                path: 'activities/:slug',
                element: <ActivityPage />
            },
            {
                path: 'gear',
                element: <GearPage />
            },
            {
                path: 'gallery',
                element: <GalleryPage />
            }
        ]
    }
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}