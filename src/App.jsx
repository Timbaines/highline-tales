import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';

/***** LAYOUTS *****/
import MainLayout from '@/layouts/MainLayout';

/***** PAGES *****/
import HomePage from '@/pages/HomePage';
import ActivityPage from '@/pages/ActivityPage';

/***** GLOBAL STYLES *****/
import '@/styles/globals.css'
import '@/styles/typography.css'

export default function App() {
    return (
        <ThemeProvider>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/activities/:slug" element={<ActivityPage />} />
                    </Routes>
                </MainLayout>
            </Router>
        </ThemeProvider>
    )
}

