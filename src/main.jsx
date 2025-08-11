import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/App.jsx'

/***** GLOBAL STYLES *****/
import '@/styles/globals.css'
import '@/styles/typography.css'
import '@/styles/utilities.css'
import '@/components/blog/styles/prose.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)