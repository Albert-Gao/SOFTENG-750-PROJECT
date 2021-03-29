import React from 'react'
import { PAGE_TITLE_MAP, PATHS } from '../../../../../routes/routes.constants'
import { Link } from 'react-router-dom'

const heroSectionMenuData = PAGE_TITLE_MAP.filter((item) => item.isBeforeAuth)

const LoginButton: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return isMobile ? (
        <Link
            to={PATHS.LOGIN}
            className="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
        >
            Log in
        </Link>
    ) : (
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex rounded-md shadow">
                <Link
                    to={PATHS.LOGIN}
                    className="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50"
                >
                    Log in
                </Link>
            </span>
        </div>
    )
}

export const HeroSectionMenuBody: React.FC<{ isMobile: boolean }> = ({
    isMobile,
}) => {
    return (
        <>
            <div
                className={
                    isMobile ? 'px-2 pt-2 pb-3' : 'hidden md:flex md:space-x-10'
                }
            >
                {heroSectionMenuData.map((item) => (
                    <Link
                        to={item.path}
                        className={
                            isMobile
                                ? 'block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50'
                                : 'font-medium text-gray-500 hover:text-gray-900'
                        }
                    >
                        {item.TITLE}
                    </Link>
                ))}
            </div>
            <LoginButton isMobile={isMobile} />
        </>
    )
}
