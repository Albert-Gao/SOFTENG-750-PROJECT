import React from 'react'
import { useLocation } from 'react-router'
import { PAGE_TITLE_MAP } from '../../../routes/routes.constants'
import { useAtom } from 'jotai'
import { submitNewsAtom } from '../../../state'

const SubmitButton: React.FC = () => {
    const [, setSubmitNewsAtom] = useAtom(submitNewsAtom)

    return (
        <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
                setSubmitNewsAtom({ isSubmitNewsModalOpen: true })
            }}
        >
            Submit News
        </button>
    )
}

export const PageHeader: React.FC = () => {
    const { pathname } = useLocation()

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
