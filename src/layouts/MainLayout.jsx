import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import SubpageHeader from '@/components/SubpageHeader';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import Footer from '@/components/Footer';
import VisitorCounter from "@/components/ui/VisitorCounter.jsx";
import { Container } from '@/layouts/components';

/***** MODULE STYLES *****/
import styles from '@/layouts/MainLayout.module.css';

export default function MainLayout() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isBlogPostPage = location.pathname.startsWith('/blog/');

    return (
        <div className={styles.mainLayoutContainer}>
            {isHomePage ? <Header /> :
                isBlogPostPage ? <BlogPostHeader /> :
                    <SubpageHeader />}
            <main>
                <Container variant="default">
                    <Outlet />
                </Container>
            </main>
            <VisitorCounter />
            <Footer />
        </div>
    );
};