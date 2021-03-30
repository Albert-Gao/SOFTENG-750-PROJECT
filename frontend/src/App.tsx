import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthChecker } from './components/AuthChecker'
import { ReactQueryProvider } from './components/ReactQueryProvider'

const App: React.FC = () => {
    return (
        <ReactQueryProvider>
            <BrowserRouter>
                <AuthChecker />
            </BrowserRouter>
        </ReactQueryProvider>
    )
}

export default App
