import React, { useEffect } from 'react'
import { BrowserRouter, useHistory } from 'react-router-dom'
import { useAtom } from 'jotai'
import { AuthChecker } from './components/AuthChecker'
import { ReactQueryProvider } from './components/ReactQueryProvider'
import { newsAtom, userAtom } from './state'
import { SubmitNewsModal } from './components/SubmitNewsModal/SubmitNewsModal'
import Modal from 'react-modal'
import { ToastProvider } from 'react-toast-notifications'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Auth } from './utils/Auth'
import { useQuery } from 'react-query'
import { getUserInfoApi } from './api/users.api'
import { Spinner } from './components/Spinner'
import { PATHS } from './routes/routes.constants'

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root')
}

const Inner: React.FC = ({ children }) => {
    const history = useHistory()
    const [, setUserAtom] = useAtom(userAtom)
    const { status } = useQuery(getUserInfoApi.queryKey, getUserInfoApi.query, {
        onSuccess: ({ user, accessToken }) => {
            Auth.saveUserInfo(user)
            Auth.saveAuth(accessToken)
            setUserAtom(user)
        },
    })

    useEffect(() => {
        if (status === 'error') {
            history.replace(PATHS.HOME)
        }
    }, [history, status])

    if (status === 'loading') {
        return (
            <div className="relative flex flex-col items-center w-full h-screen justify-items-center">
                <div
                    className="absolute flex flex-col items-center"
                    style={{
                        top: '50%',
                        transform: 'translateY(-50%)',
                    }}
                >
                    <Spinner height={30} width={30} />
                    <span className="block mt-1 text-2xl font-extrabold tracking-tight sm:text-2xl xl:text-2xl">
                        <span className="block text-indigo-600">
                            Authenticating User
                        </span>
                    </span>
                </div>
            </div>
        )
    }

    return <>{children}</>
}

const App: React.FC = () => {
    const [{ isSubmitNewsModalOpen }] = useAtom(newsAtom)

    return (
        <ToastProvider autoDismiss placement="top-center">
            <ReactQueryProvider>
                <BrowserRouter>
                    {Auth.isAuth() ? (
                        <Inner>
                            <AuthChecker />
                        </Inner>
                    ) : (
                        <AuthChecker />
                    )}
                </BrowserRouter>
                <SubmitNewsModal isOpen={isSubmitNewsModalOpen} />
            </ReactQueryProvider>
        </ToastProvider>
    )
}

export default App
