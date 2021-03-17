import React from 'react'
import { Link } from 'react-router-dom'
import { PAGE_TITLE_MAP } from '../../../routes/routes.constants'
import classNames from 'classnames'

export const ProfileMenu: React.FC<{
    isMobile: boolean
    setIsProfileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ isMobile, setIsProfileMenuOpen, setIsMobileMenuOpen }) => {
    const items = PAGE_TITLE_MAP.filter((item) => item.isProfileMenu).map(
        (config) => (
            <Link
                key={config.path}
                to={config.path}
                onClick={() => {
                    setIsProfileMenuOpen(false)
                    setIsMobileMenuOpen(false)
                }}
                className={classNames('block px-3 py-2', {
                    'text-base font-medium text-white rounded-md hover:bg-indigo-500 hover:bg-opacity-75': isMobile,
                    'text-sm text-gray-700 hover:bg-gray-100': !isMobile,
                })}
                {...(isMobile
                    ? {}
                    : {
                          role: 'menuitem',
                      })}
            >
                {config.TITLE}
            </Link>
        ),
    )

    if (isMobile) {
        return <div className="px-2 mt-3 space-y-1">{items}</div>
    }

    return (
        <div
            className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
        >
            {items}
        </div>
    )
}
