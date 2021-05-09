import { Dispatch, SetStateAction } from 'react'
import { FavTab } from './FavTab'
import { ProfileTab } from './ProfileTab'
import { SubmittedNewsTab } from './SubmittedNewsTab'
import { Tabs } from './Tabs'
import { UserHeader } from './UserHeader'
import { getOtherUserInfoApi } from '../../../api/users.api'

export const Box: React.FC = ({ children }) => (
    <div
        className="flex h-screen overflow-hidden bg-white"
        style={{ height: 'max-content' }}
    >
        <div className="flex flex-col flex-1 w-0">
            <main className="relative flex-1 focus:outline-none">
                <div className="py-24">
                    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:grid">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    </div>
)

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T

export const UserTabs: React.FC<{
    id: string
    user: PromiseType<ReturnType<typeof getOtherUserInfoApi.query>>
    currentTab: 'profile' | 'fav' | 'submitted'
    setCurrentTab: Dispatch<SetStateAction<'profile' | 'fav' | 'submitted'>>
}> = ({ id, user, currentTab, setCurrentTab }) => {
    return (
        <Box>
            <article style={{ width: '100%' }}>
                <UserHeader avatar={user.avatar} nickName={user.nickName} />
                <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
                {currentTab === 'profile' && (
                    <ProfileTab
                        shouldShowEmail={user.privacy.shouldShowEmail}
                        email={user.email}
                        createdAt={user.createdAt}
                        updatedAt={user.updatedAt}
                    />
                )}
                {currentTab === 'fav' && (
                    <FavTab
                        shouldShowFavouritePage={
                            user.privacy.shouldShowFavouritePage
                        }
                        // @ts-ignore
                        favNews={user.favourites}
                    />
                )}
                {currentTab === 'submitted' && (
                    <SubmittedNewsTab
                        userId={id}
                        shouldShowSubmittedNews={
                            user.privacy.shouldShowSubmittedNews
                        }
                    />
                )}
            </article>
        </Box>
    )
}
