import React from 'react'
import { PAGE_TITLE_MAP } from '../../../routes/routes.constants'
import { NavBarItem } from './NavBarItem'

export const NavBar: React.FC<{
    isMobile: boolean
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ isMobile, setIsMobileMenuOpen }) => {
    const items = PAGE_TITLE_MAP.filter(
        (item) => !item.isProfileMenu,
    ).map((config) => (
        <NavBarItem
            key={config.path}
            isMobile={isMobile}
            path={config.path}
            title={config.TITLE}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
    ))

    if (isMobile) {
        return <div className="px-2 pt-2 pb-3 space-y-1">{items}</div>
    }

    return (
        <div className="hidden lg:block lg:ml-10">
            <div className="flex space-x-4">{items}</div>
        </div>
    )
}
