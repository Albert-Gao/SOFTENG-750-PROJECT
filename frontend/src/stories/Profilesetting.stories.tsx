import User from '../pages/User/User'
import { getStoryTemplate, Meta } from './utils'

export default {
    title: 'Example/Profile',
    component: User,
} as Meta

const Template = getStoryTemplate(User)

export const ProfilePage = Template.bind({})
ProfilePage.args = {}
