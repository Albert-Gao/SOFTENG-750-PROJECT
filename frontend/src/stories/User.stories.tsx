import { useState } from 'react'
import { FavTab } from '../pages/User/components/FavTab'
import { ProfileTab } from '../pages/User/components/ProfileTab'
import { SubmittedNewsTab } from '../pages/User/components/SubmittedNewsTab'
import { Tabs } from '../pages/User/components/Tabs'
import { UserHeader } from '../pages/User/components/UserHeader'
import { Box } from '../pages/User/User'
import { getStoryTemplate, Meta } from './utils'

const trial: React.FC = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentTab, setCurrentTab] = useState<
        'profile' | 'fav' | 'submitted'
    >('profile')

    return (
        <div>
            <Box>
                <article style={{ width: '100%' }}>
                    <UserHeader avatar={'1'} nickName={'1111111111'} />
                    <Tabs
                        setCurrentTab={setCurrentTab}
                        currentTab={currentTab}
                    />
                    {currentTab === 'profile' && (
                        <ProfileTab
                            shouldShowEmail={true}
                            email={'1111111111@qq.com'}
                            createdAt={'01/05/2021'}
                            updatedAt={'01/05/2021'}
                        />
                    )}
                    {currentTab === 'fav' && (
                        <FavTab
                            shouldShowFavouritePage={true}
                            // @ts-ignore
                            favNews={[]}
                        />
                    )}
                    {currentTab === 'submitted' && (
                        <SubmittedNewsTab
                            userId={'11111111111'}
                            shouldShowSubmittedNews={true}
                        />
                    )}
                </article>
            </Box>
        </div>
    )
}

export default {
    title: 'Pages/User',
    component: trial,
} as Meta

const Template = getStoryTemplate(trial)

export const UserPage = Template.bind({})
UserPage.args = {}
