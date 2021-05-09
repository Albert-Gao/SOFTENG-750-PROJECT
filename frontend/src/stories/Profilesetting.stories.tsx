import Profile from '../pages/Profile/Profile'
import { ProfilePageSideNav } from '../components/AppShell/components/ProfilePageSideNav'
import { SettingsPageContainer } from '../components/AppShell/components/Main'
import { PageHeader } from '../components/AppShell/components/PageHeader'
import { getStoryTemplate, Meta } from './utils'

const ProfileWidget: React.FC = ({ children }) => {
    return (
        <div>
            <PageHeader />
            <SettingsPageContainer>
                <ProfilePageSideNav />
                <Profile />
            </SettingsPageContainer>
        </div>
    )
}
export default {
    title: 'Pages/Profile',
    component: ProfileWidget,
} as Meta

const Template = getStoryTemplate(ProfileWidget)

export const ProfilePage = Template.bind({})
ProfilePage.args = {}
