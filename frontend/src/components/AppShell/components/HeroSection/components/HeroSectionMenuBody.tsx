import React from 'react'
import { PAGE_TITLE_MAP, PATHS } from '../../../../../routes/routes.constants'

const heroSectionMenuData = PAGE_TITLE_MAP.filter((item) => item.isBeforeAuth)

const LoginButton: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return isMobile ? (
        <a
            href={PATHS.LOGIN}
            className="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
        >
            Log in
        </a>
    ) : (
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex rounded-md shadow">
                <a
                    href={PATHS.LOGIN}
                    className="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50"
                >
                    Log in
                </a>
            </span>
        </div>
    )
}

export const HeroSectionMenuBody: React.FC<{ isMobile: boolean }> = ({
    isMobile,
}) => {
    return isMobile ? (
        <>
            <div className="px-2 pt-2 pb-3">
                {heroSectionMenuData.map((item) => (
                    <a
                        href={item.path}
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                        {item.TITLE}
                    </a>
                ))}
            </div>
            <LoginButton isMobile={isMobile} />
        </>
    ) : (
        <>
            <div className="hidden md:flex md:space-x-10">
                {heroSectionMenuData.map((item) => (
                    <a
                        href={item.path}
                        className="font-medium text-gray-500 hover:text-gray-900"
                    >
                        {item.TITLE}
                    </a>
                ))}
            </div>
            <LoginButton isMobile={isMobile} />
        </>
    )
}
