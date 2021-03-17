import React from 'react'

export const MobileNavBarToggleButton: React.FC<{
    onClick: React.EventHandler<any>
}> = ({ onClick }) => {
    return (
        <div className="flex lg:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-indigo-200 bg-indigo-600 rounded-md hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={onClick}
            >
                <span className="sr-only">Open main menu</span>
                {/* <!--
Heroicon name: outline/menu
Menu open: "hidden", Menu closed: "block"
--> */}
                <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                {/* <!--
Heroicon name: outline/x

Menu open: "block", Menu closed: "hidden"
--> */}
                <svg
                    className="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    )
}
