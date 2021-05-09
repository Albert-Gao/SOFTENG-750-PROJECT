import React from 'react'
import { useLocation } from 'react-router'
import { PAGE_TITLE_MAP, PATHS } from '../../../routes/routes.constants'
import { useAtom } from 'jotai'
import { newsAtom } from '../../../state'

export const SubmitButton: React.FC = () => {
    const [, setNewsAtom] = useAtom(newsAtom)

    return (
        <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
                setNewsAtom((v) => ({
                    ...v,
                    isSubmitNewsModalOpen: true,
                }))
            }}
        >
            Submit News
        </button>
    )
}

export const PageHeader: React.FC = () => {
    const { pathname } = useLocation()

    if (
        [PATHS.FEATURES, PATHS.FAQ].includes(pathname as PATHS) ||
        pathname.startsWith(PATHS.DETAIL_RAW) ||
        pathname.startsWith(PATHS.USER_RAW)
    )
        return null

    const route = PAGE_TITLE_MAP.find((config) => config.path === pathname)

    return (
        <header className="py-10">
            <div className="flex justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white">
                    {route?.TITLE ?? ''}
                </h1>

                <SubmitButton />
            </div>
        </header>
    )
}
