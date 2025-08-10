import { ThemeProvider } from '@/context/ThemeContext';
import GlobalErrorBoundary from '@/components/errors/GlobalErrorBoundary';

import AppRouter from '@/routes/AppRouter';

export default function App() {
    return (
        <ThemeProvider>
            <GlobalErrorBoundary>
                <AppRouter />
            </GlobalErrorBoundary>
        </ThemeProvider>
    );
}