import React from 'react'
import { Link } from 'react-router-dom'
import { PAGE_TITLE_MAP, PATHS } from '../../../routes/routes.constants'
import classNames from 'classnames'
import { Auth } from '../../../utils/Auth'

export const ProfileMenu: React.FC<{
    isMobile: boolean
    setIsProfileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ isMobile, setIsProfileMenuOpen, setIsMobileMenuOpen }) => {
    const menuItemCss = classNames('block px-3 py-2', {
        'text-base font-medium text-white rounded-md hover:bg-indigo-500 hover:bg-opacity-75': isMobile,
        'text-sm text-gray-700 hover:bg-gray-100': !isMobile,
    })
    const a11y = isMobile
        ? {}
        : {
              role: 'menuitem',
          }

    function menuItemOnClick() {
        setIsProfileMenuOpen(false)
        setIsMobileMenuOpen(false)
    }

    const items = PAGE_TITLE_MAP.filter((item) => item.isProfileMenu).map(
        (config) => (
            <Link
                key={config.path}
                to={config.path}
                onClick={menuItemOnClick}
                className={menuItemCss}
                {...a11y}
            >
                {config.TITLE}
            </Link>
        ),
    )

    items.push(
        <Link
            to={PATHS.HOME}
            replace
            key={PATHS.HOME}
            type="button"
            onClick={() => {
                menuItemOnClick()
                Auth.logout()
            }}
            className={menuItemCss}
            {...a11y}
        >
            Log out
        </Link>,
    )

    if (isMobile) {
        return <div className="px-2 mt-3 space-y-1">{items}</div>
    }

    return (
        <div
            className="absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
        >
            {items}
        </div>
    )
}
