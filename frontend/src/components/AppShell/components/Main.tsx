import React from 'react'
import { useLocation } from 'react-router-dom'
import { PATHS } from '../../../routes/routes.constants'

const Container: React.FC<{ isAuth: boolean }> = ({ isAuth, children }) => (
    <main className={isAuth ? '-mt-32' : ''}>
        <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
        </div>
    </main>
)

export const Main: React.FC<{ isAuth: boolean }> = ({ isAuth, children }) => {
    const { pathname } = useLocation()

    if (pathname === PATHS.HOME || pathname === PATHS.FEATURES) {
        return (
            <Container isAuth={isAuth}>
                <div className="px-1 py-6 rounded-lg sm:px-6">{children}</div>
            </Container>
        )
    }

    return (
        <Container isAuth={isAuth}>
            <div className="px-2 py-6 bg-white rounded-lg shadow sm:px-6">
                <div className="border-4 border-gray-200 border-dashed rounded-lg h-96">
                    {children}
                </div>
            </div>
        </Container>
    )
}
