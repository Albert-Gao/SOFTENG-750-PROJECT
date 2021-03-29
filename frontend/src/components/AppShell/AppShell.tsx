import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PATHS } from '../../routes/routes.constants'
import { useAuth } from '../../utils/useAuth'
import { HeroSection } from './components/HeroSection/HeroSection'
import { Main } from './components/Main'
import { MobileNavBarToggleButton } from './components/MobileNavButtonToggleButton'
import { MobileProfileMenuUserInfo } from './components/MobileProfileMenuUserInfo'
import { NavBar } from './components/NavBar'
import { PageHeader } from './components/PageHeader'
import { ProfileMenu } from './components/ProfileMenu'
import { ProfileMenuToggleButton } from './components/ProfileMenuToggleButton'
import { SearchBar } from './components/SearchBar'

const shouldAddAppShell = (path: string) =>
    ![PATHS.LOGIN].includes((path as unknown) as PATHS)

export const AppShell: React.FC = ({ children }) => {
    const isAuth = useAuth()
    const { pathname } = useLocation()
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    if (!shouldAddAppShell(pathname)) return <>{children}</>

    return (
        <div className="min-h-screen bg-gray-100">
            {isAuth ? (
                <div className="pb-32 bg-indigo-600">
                    <nav className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none">
                        <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
                            <div className="relative flex items-center justify-between h-16 lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                                <div className="flex items-center px-2 lg:px-0">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="block w-8 h-8"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <NavBar
                                        isMobile={false}
                                        setIsMobileMenuOpen={
                                            setIsMobileMenuOpen
                                        }
                                    />
                                </div>
                                <SearchBar />
                                <MobileNavBarToggleButton
                                    onClick={() => {
                                        setIsMobileMenuOpen((v) => !v)
                                    }}
                                />
                                <div className="hidden lg:block lg:ml-4">
                                    <div className="flex items-center">
                                        {/* <!-- Profile dropdown --> */}
                                        <div className="relative flex-shrink-0 ml-3">
                                            <ProfileMenuToggleButton
                                                onClick={() => {
                                                    setIsProfileMenuOpen(
                                                        (v) => !v,
                                                    )
                                                }}
                                            />

                                            {/* <!--
                                Dropdown menu, show/hide based on menu state.
            
                                Entering: "transition ease-out duration-100"
                                From: "transform opacity-0 scale-95"
                                To: "transform opacity-100 scale-100"
                                Leaving: "transition ease-in duration-75"
                                From: "transform opacity-100 scale-100"
                                To: "transform opacity-0 scale-95"
                            --> */}
                                            {isProfileMenuOpen && (
                                                <ProfileMenu
                                                    isMobile={false}
                                                    setIsProfileMenuOpen={
                                                        setIsProfileMenuOpen
                                                    }
                                                    setIsMobileMenuOpen={
                                                        setIsMobileMenuOpen
                                                    }
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                        {isMobileMenuOpen && (
                            <div className="lg:hidden" id="mobile-menu">
                                <NavBar
                                    isMobile
                                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                                />
                                <div className="pt-4 pb-3 border-t border-indigo-700">
                                    <MobileProfileMenuUserInfo />
                                    <ProfileMenu
                                        isMobile
                                        setIsProfileMenuOpen={
                                            setIsProfileMenuOpen
                                        }
                                        setIsMobileMenuOpen={
                                            setIsMobileMenuOpen
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </nav>
                    <PageHeader />
                </div>
            ) : (
                <HeroSection />
            )}

            <Main isAuth={isAuth}>{children}</Main>
        </div>
    )
}
