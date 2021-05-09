import Profile from '../../pages/Profile/Profile'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Profile/Profile',
    component: Profile,
} as Meta

const Template = getStoryTemplate(Profile)

export const Standard = Template.bind({})
Standard.args = {}
