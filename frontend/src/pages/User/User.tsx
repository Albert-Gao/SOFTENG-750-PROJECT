import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getOtherUserInfoApi } from '../../api/users.api'
import { LoadQuery } from '../../components/LoadQuery'
import { FavTab } from './components/FavTab'
import { ProfileTab } from './components/ProfileTab'
import { Tabs } from './components/Tabs'
import { UserHeader } from './components/UserHeader'

const Box: React.FC = ({ children }) => (
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

const User: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [currentTab, setCurrentTab] = useState<
        'profile' | 'fav' | 'submitted'
    >('profile')
    const { data, refetch, status } = useQuery(
        getOtherUserInfoApi.queryKey,
        () => getOtherUserInfoApi.query({ userId: id }),
    )

    return (
        <LoadQuery status={status} data={data!} refetch={refetch}>
            {(user) => (
                <Box>
                    <article style={{ width: '100%' }}>
                        <UserHeader
                            avatar={user.avatar}
                            nickName={user.nickName}
                        />
                        <Tabs
                            setCurrentTab={setCurrentTab}
                            currentTab={currentTab}
                        />
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
                    </article>
                </Box>
            )}
        </LoadQuery>
    )
}

export default User
