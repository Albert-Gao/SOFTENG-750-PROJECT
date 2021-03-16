import React from 'react'
import { NavBar } from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/routes'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes />
        </BrowserRouter>
    )
}

export default App
