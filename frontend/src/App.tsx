import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthChecker } from './components/AuthChecker'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AuthChecker />
        </BrowserRouter>
    )
}

export default App
