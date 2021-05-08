import Profile from '../pages/Profile/Profile'
import { ProfilePageSideNav } from '../components/AppShell/components/ProfilePageSideNav'
import { SettingsPageContainer } from '../components/AppShell/components/Main'
import { PageHeader } from '../components/AppShell/components/PageHeader'
import { getStoryTemplate, Meta } from './utils'

const trial: React.FC = ({ children }) => {
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
    component: trial,
} as Meta

const Template = getStoryTemplate(trial)

export const ProfilePage = Template.bind({})
ProfilePage.args = {}
