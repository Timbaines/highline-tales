import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';

/***** LAYOUTS *****/
import MainLayout from '@/layouts/MainLayout';

/***** PAGES *****/
import HomePage from '@/pages/HomePage';
import ActivityPage from '@/pages/activities/ActivityPage';
import ActivityPost from '@/pages/activities/ActivityPost';
import EssentialsPage from '@/pages/essentials/EssentialsPage';
import BlogPage from '@/pages/blog/BlogPage';
import BlogPost from '@/pages/blog/BlogPost.jsx';

/***** SERVICES *****/
import { getActivityBySlug } from '@/services/activitiesService';
import { getPostBySlug } from '@/services/blogService';

/***** ERROR PAGES *****/
import ActivityNotFound from '@/components/activities/ActivityError';
import BlogPostNotFound from '@/components/blog/BlogPostError';


const activityLoader = ({ params }) => {
    const activity = getActivityBySlug(params.slug);
    if (!activity) throw new Response('Activity not found', { status: 404 });
    return { activity };
    };

const blogPostLoader = ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw new Response('Blog post not found', { status: 404 });
    return { post };
};

import RouteErrorElement from '@/components/errors/RouteErrorElement';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <MainLayout />
                <ScrollRestoration />
            </>
        ),
        errorElement: <RouteErrorElement />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'activities',
                element: <ActivityPage />
            },
            {
                path: 'activities/:slug',
                element: <ActivityPost />,
                loader: activityLoader,
                errorElement: <ActivityNotFound />
            },
            {
                path: 'hiking-checklist',
                element: <EssentialsPage />
            },
            {
                path: 'blog',
                element: <BlogPage />
            },
            {
                path: 'blog/:slug',
                element: <BlogPost />,
                loader: blogPostLoader,
                errorElement: <BlogPostNotFound />
            },
            { path: '*', element: <div style={{ padding: '2rem 0' }}><h2>Page Not Found</h2></div> }
        ]
    }
]);

export default function AppRouter() { return <RouterProvider router={router}/>;}