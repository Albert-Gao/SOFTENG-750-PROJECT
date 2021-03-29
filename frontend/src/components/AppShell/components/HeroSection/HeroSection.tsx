import React from 'react'
import { HeroSectionBody } from './components/HeroSectionBody'
import { HeroSectionMenuBody } from './components/HeroSectionMenuBody'

const MobileMenuOpenButton: React.FC<{
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setIsMenuOpen }) => (
    <div className="flex items-center -mr-2 md:hidden">
        <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            onClick={() => {
                setIsMenuOpen((v) => !v)
            }}
        >
            <span className="sr-only">Open main menu</span>
            {/* <!-- Heroicon name: outline/menu --> */}
            <svg
                className="w-6 h-6"
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
        </button>
    </div>
)

const HeroSectionNavMenuDesktop: React.FC<{
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setIsMenuOpen }) => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <nav
                className="relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
            >
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="w-auto h-8 sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </a>
                        <MobileMenuOpenButton setIsMenuOpen={setIsMenuOpen} />
                    </div>
                </div>
                <HeroSectionMenuBody isMobile={false} />
            </nav>
        </div>
    )
}

const HeroSectionNavMenuMobile: React.FC<{
    isMenuOpen: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ isMenuOpen, setIsMenuOpen }) => {
    if (!isMenuOpen) return null

    return (
        /* <!--
        Mobile menu, show/hide based on menu open state.
    
        Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --> */
        <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
            <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                        <img
                            className="w-auto h-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt=""
                        />
                    </div>
                    <div className="-mr-2">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => {
                                setIsMenuOpen((v) => !v)
                            }}
                        >
                            <span className="sr-only">Close menu</span>
                            {/* <!-- Heroicon name: outline/x --> */}
                            <svg
                                className="w-6 h-6"
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
                </div>
                <HeroSectionMenuBody isMobile />
            </div>
        </div>
    )
}

export const HeroSection: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <div className="relative overflow-hidden bg-gray-50">
            <div
                className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
                aria-hidden="true"
            >
                <div className="relative h-full mx-auto max-w-7xl">
                    <svg
                        className="absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                        width="404"
                        height="784"
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    className="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="784"
                            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                        />
                    </svg>
                    <svg
                        className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                        width="404"
                        height="784"
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    className="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="784"
                            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                        />
                    </svg>
                </div>
            </div>

            <div className="relative pt-6 pb-4 sm:pb-10">
                <HeroSectionNavMenuDesktop setIsMenuOpen={setIsMenuOpen} />
                <HeroSectionNavMenuMobile
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
                <HeroSectionBody />
            </div>
        </div>
    )
}
