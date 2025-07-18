import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';

/***** LAYOUTS *****/
import MainLayout from '@/layouts/MainLayout';

/***** PAGES *****/
import Home from '@/pages/Home';

/***** GLOBAL STYLES *****/
import '@/styles/globals.css'
import '@/styles/typography.css'

export default function App() {
    return (
        <ThemeProvider>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </MainLayout>
            </Router>
        </ThemeProvider>
    )
}

