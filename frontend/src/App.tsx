import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAtom } from 'jotai'
import { AuthChecker } from './components/AuthChecker'
import { ReactQueryProvider } from './components/ReactQueryProvider'
import { newsAtom, userAtom } from './state'
import { SubmitNewsModal } from './components/SubmitNewsModal/SubmitNewsModal'
import Modal from 'react-modal'
import { ToastProvider } from 'react-toast-notifications'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Auth } from './utils/Auth'

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root')
}

const App: React.FC = () => {
    const [{ isSubmitNewsModalOpen }] = useAtom(newsAtom)
    const [user, setUserAtom] = useAtom(userAtom)

    useEffect(() => {
        if (Auth.isAuth() && !user._id) {
            const user = Auth.getUserInfo()
            setUserAtom(user)
        }
    }, [setUserAtom, user._id])

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
