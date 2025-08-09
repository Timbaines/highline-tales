import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';

/***** LAYOUTS *****/
import MainLayout from '@/layouts/MainLayout';

/***** PAGES *****/
import HomePage from '@/pages/HomePage';
import ActivityPage from '@/pages/activities/ActivityPage';
import ActivityPost from '@/pages/activities/ActivityPost';
import EssentialsPage from '@/pages/essentials/EssentialsPage';
import BlogPage from '@/pages/blog/BlogPage';
import BlogPostPage from '@/pages/blog/BlogPostPage';

/***** ERROR PAGES *****/
import ActivityNotFound from '@/components/activities/ActivityError';
import BlogPostNotFound from '@/components/blog/BlogPostError';

/***** UTILS* ****/
import { createSlug } from '@/utils/stringUtils';

/***** DATA *****/
import { activitiesData } from '@/data/activitiesData';
import { blogData } from '@/data/blogData';

const activityLoader = ({ params }) => {
    const { slug } = params;
    const activity = activitiesData.find(
        activity => createSlug(activity.title) === slug
    );

    if (!activity) {
        throw new Response("activities not found", { status: 404 });
    }

    return { activity };
};

const blogPostLoader = ({ params }) => {
    const { slug } = params;
    const post = blogData.find(post => post.slug === slug);

    if (!post) {
        throw new Response("blog post not found", { status: 404 });
    }

    return { post };
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
                element: <BlogPostPage />,
                loader: blogPostLoader,
                errorElement: <BlogPostNotFound />
            }
        ]
    }
]);

export default function AppRouter() { return <RouterProvider router={router}/>;}