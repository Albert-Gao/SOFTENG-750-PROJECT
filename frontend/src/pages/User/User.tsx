import React, { useState } from 'react'
import { FavTab } from './components/FavTab'
import { ProfileTab } from './components/ProfileTab'
import { SubmittedNewsTab } from './components/SubmittedNewsTab'
import { TabButton } from './components/TabButton'

const Box: React.FC = ({ children }) => (
    <div
        className="flex h-screen overflow-hidden bg-white"
        style={{ height: 'max-content' }}
    >
        <div className="flex flex-col flex-1 w-0">
            <main className="relative flex-1 focus:outline-none">
                <div className="py-24 xl:py-10">
                    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
                        {children}{' '}
                    </div>
                </div>
            </main>
        </div>
    </div>
)

const TABS = {
    profile: ProfileTab,
    fav: FavTab,
    submitted: SubmittedNewsTab,
}

const User: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<
        'profile' | 'fav' | 'submitted'
    >('profile')

    const Tab = TABS[currentTab]

    return (
        <Box>
            <article>
                {/* <!-- Profile header --> */}
                <div>
                    <div className="flex max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div className="flex">
                                <img
                                    className="z-40 w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                <div className="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                        Ricardo Cooper
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 hidden min-w-0 mt-6 sm:block 2xl:hidden">
                            <h1 className="text-2xl font-bold text-gray-900 truncate">
                                Ricardo Cooper
                            </h1>
                        </div>
                    </div>
                </div>

                {/* <!-- Tabs --> */}
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                    <div className="border-b border-gray-200">
                        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                            <nav
                                className="flex -mb-px space-x-8"
                                aria-label="Tabs"
                            >
                                {/* <!-- Current: "border-pink-500 text-gray-900", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
                                <TabButton
                                    onClick={() => {
                                        setCurrentTab('profile')
                                    }}
                                    isCurrent={currentTab === 'profile'}
                                >
                                    Profile
                                </TabButton>

                                <TabButton
                                    onClick={() => {
                                        setCurrentTab('fav')
                                    }}
                                    isCurrent={currentTab === 'fav'}
                                >
                                    Favourites
                                </TabButton>

                                <TabButton
                                    onClick={() => {
                                        setCurrentTab('submitted')
                                    }}
                                    isCurrent={currentTab === 'submitted'}
                                >
                                    Submitted News
                                </TabButton>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* <!-- Description list --> */}
                <Tab />
            </article>
        </Box>
    )
}

export default User
