import { TabButton } from './TabButton'

export const Tabs: React.FC<{
    setCurrentTab: React.Dispatch<
        React.SetStateAction<'profile' | 'fav' | 'submitted'>
    >
    currentTab: 'profile' | 'fav' | 'submitted'
}> = ({ setCurrentTab, currentTab }) => {
    return (
        <div className="mt-6 sm:mt-2 2xl:mt-5">
            <div className="border-b border-gray-200">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <nav className="flex -mb-px space-x-8" aria-label="Tabs">
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
    )
}
