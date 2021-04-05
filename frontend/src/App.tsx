import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAtom } from 'jotai'
import { AuthChecker } from './components/AuthChecker'
import { ReactQueryProvider } from './components/ReactQueryProvider'
import { submitNewsAtom } from './state'
import { SubmitNewsModal } from './components/SubmitNewsModal/SubmitNewsModal'
import Modal from 'react-modal'
import { ToastProvider } from 'react-toast-notifications'

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root')
}

const App: React.FC = () => {
    const [{ isSubmitNewsModalOpen }] = useAtom(submitNewsAtom)

    return (
        <ToastProvider autoDismiss placement="top-center">
            <ReactQueryProvider>
                <BrowserRouter>
                    <AuthChecker />
                </BrowserRouter>
                <SubmitNewsModal isOpen={isSubmitNewsModalOpen} />
            </ReactQueryProvider>
        </ToastProvider>
    )
}

export default App
