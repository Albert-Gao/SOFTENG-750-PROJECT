import React from 'react'
import { useLocation } from 'react-router'
import { PAGE_TITLE_MAP } from '../../../routes/routes.constants'

export const PageHeader: React.FC = () => {
    const { pathname } = useLocation()

    const route = PAGE_TITLE_MAP.find((config) => config.path === pathname)

    return (
        <header className="py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white">
                    {route?.TITLE ?? ''}
                </h1>
            </div>
        </header>
    )
}
