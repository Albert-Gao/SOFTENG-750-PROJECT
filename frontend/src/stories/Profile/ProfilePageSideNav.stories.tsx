import { ProfilePageSideNav } from '../../components/AppShell/components/ProfilePageSideNav'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Profile/ProfilePageSideNav',
    component: ProfilePageSideNav,
} as Meta

const Template = getStoryTemplate(ProfilePageSideNav)

export const Standard = Template.bind({})
Standard.args = {}
