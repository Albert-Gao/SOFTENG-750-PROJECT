import Profile from '../pages/Profile/Profile'
import Privacy from '../pages/ProfilePrivacy/ProfilePrivacy'
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
const trial1: React.FC = ({ children }) => {
    return (
        <div>
            <PageHeader />
            <SettingsPageContainer>
                <ProfilePageSideNav />
                <Privacy />
            </SettingsPageContainer>
        </div>
    )
}

export default {
    title: 'Pages/Profile',
    component: trial,
} as Meta

const Template = getStoryTemplate(trial)
const Template1 = getStoryTemplate(trial1)

export const ProfilePage = Template.bind({})
ProfilePage.args = {}

export const PrivacyPage = Template1.bind({})
PrivacyPage.args = {}
