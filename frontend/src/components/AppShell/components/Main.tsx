import React from 'react'
import { useLocation } from 'react-router-dom'
import { PATHS } from '../../../routes/routes.constants'
import { ProfilePageSideNav } from './ProfilePageSideNav'

const Container: React.FC<{ isAuth: boolean }> = ({ isAuth, children }) => (
    <main className={isAuth ? '-mt-32' : ''}>
        <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
        </div>
    </main>
)

const SettingsPageContainer: React.FC = ({ children }) => (
    <main className="relative -mt-32">
        <div className="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8">
            <div className="overflow-hidden bg-white rounded-lg shadow">
                <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                    {children}
                </div>
            </div>
        </div>
    </main>
)

export const Main: React.FC<{ isAuth: boolean }> = ({ isAuth, children }) => {
    const { pathname } = useLocation()

    if (
        [PATHS.HOME, PATHS.FEATURES, PATHS.ABOUT, PATHS.FAQ].includes(
            pathname as PATHS,
        )
    ) {
        return (
            <Container isAuth={isAuth}>
                <div className="px-1 py-6 rounded-lg sm:px-6">{children}</div>
            </Container>
        )
    }

    if (
        [
            PATHS.PROFILE,
            PATHS.PROFILE_FAV_LIST,
            PATHS.PROFILE_NEWS_SUBMISSION_LIST,
            PATHS.PROFILE_PRIVACY,
            PATHS.PROFILE_COMMENTS,
        ].includes(pathname as PATHS)
    ) {
        return (
            <SettingsPageContainer>
                <ProfilePageSideNav />
                {children}
            </SettingsPageContainer>
        )
    }

    if (
        pathname.startsWith(PATHS.DETAIL_RAW) ||
        pathname.startsWith(PATHS.USER_RAW)
    ) {
        return <>{children}</>
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
