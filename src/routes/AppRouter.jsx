import { createBrowserRouter, RouterProvider, ScrollRestoration
} from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import ActivitiesPage from '@/pages/Activities/ActivitiesPage.jsx';
import ActivityPage from '@/pages/Activity/ActivityPage.jsx';
import ActivityNotFound from '@/components/activity/ActivityError.jsx'
import GearPage from '@/pages/Gear/GearPage.jsx';
import { createSlug } from '@/utils/stringUtils';
import { activitiesData } from '@/data/activitiesData.js';

const activityLoader = ({ params }) => {
    const { slug } = params;
    const activity = activitiesData.find(
        activity => createSlug(activity.title) === slug
    );

    if (!activity) {
        throw new Response("Activity not found", { status: 404 });
    }

    return { activity };
};

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
                element: <ActivityPage />,
                loader: activityLoader,
                errorElement: <ActivityNotFound />
            },
            {
                path: 'gear',
                element: <GearPage />
            }
        ]
    }
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}