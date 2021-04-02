import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAtom } from 'jotai'
import { AuthChecker } from './components/AuthChecker'
import { ReactQueryProvider } from './components/ReactQueryProvider'
import { submitNewsAtom } from './state'
import { SubmitNewsModal } from './components/SubmitNewsModal/SubmitNewsModal'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const App: React.FC = () => {
    const [{ isSubmitNewsModalOpen }] = useAtom(submitNewsAtom)

    return (
        <>
            <ReactQueryProvider>
                <BrowserRouter>
                    <AuthChecker />
                </BrowserRouter>
            </ReactQueryProvider>
            <SubmitNewsModal isOpen={isSubmitNewsModalOpen} />
        </>
    )
}

export default App
