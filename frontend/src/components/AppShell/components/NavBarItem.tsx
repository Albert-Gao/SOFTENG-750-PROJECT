import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { PATHS } from '../../../routes/routes.constants'
import classNames from 'classnames'

export const NavBarItem: React.FC<{
    isMobile: boolean
    path: PATHS
    title: string
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ isMobile, path, title, setIsMobileMenuOpen }) => {
    const isMatch = useRouteMatch({
        path,
        exact: true,
    })

    return (
        <Link
            onClick={() => {
                setIsMobileMenuOpen(false)
            }}
            to={path}
            className={classNames(
                'px-3 py-2 font-medium text-white rounded-md',
                {
                    'bg-indigo-700': isMatch,

                    'hover:bg-indigo-500 hover:bg-opacity-75': !isMatch,

                    'text-sm': !isMobile,
                    'block text-base': isMobile,
                },
            )}
        >
            {title}
        </Link>
    )
}
