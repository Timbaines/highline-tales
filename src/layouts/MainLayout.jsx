import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VisitorCounter from "@/components/ui/VisitorCounter.jsx";

export default function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <VisitorCounter />
            <Footer />
        </>
    );
}
