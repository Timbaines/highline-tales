import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@/context/ThemeContext";
import App from '@/App.jsx'

/***** GLOBAL STYLES *****/
import '@/styles/globals.css'
import '@/styles/typography.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </StrictMode>
)
