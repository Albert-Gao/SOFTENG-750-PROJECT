import { useState } from 'react'
import { NewsItemMenu } from './NewsItemMenu'

export const NewsItemMenuButton: React.FC<{ id: string }> = ({ id }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <button
                type="button"
                className="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600"
                id="options-menu-0"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => {
                    setIsMenuOpen((v) => !v)
                }}
            >
                <span className="sr-only">Open options</span>
                {/* <!-- Heroicon name: solid/dots-vertical --> */}
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </button>
            <NewsItemMenu isMenuOpen={isMenuOpen} id={id} />
        </>
    )
}
