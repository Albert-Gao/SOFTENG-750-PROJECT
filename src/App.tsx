import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppShell } from './components/AppShell/AppShell'
import { Routes } from './routes/routes'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppShell>
                <Routes />
            </AppShell>
        </BrowserRouter>
    )
}

export default App
