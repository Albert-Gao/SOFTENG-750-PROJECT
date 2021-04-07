import React from 'react'

export const ShareButton: React.FC = () => {
    return (
        <div className="flex text-sm">
            <span className="inline-flex items-center text-sm">
                <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                    {/* <!-- Heroicon name: solid/share --> */}
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    <span className="font-medium text-gray-900">Share</span>
                </button>
            </span>
        </div>
    )
}
