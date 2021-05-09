import { ProfileTab } from '../../pages/User/components/ProfileTab'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/User/ProfileTab',
    component: ProfileTab,
} as Meta<typeof ProfileTab>

const Template = getStoryTemplate(ProfileTab)

export const Standard = Template.bind({})
Standard.args = {
    email: 'a@a.com',
    createdAt: '2021-04-15T02:12:52.290Z',
    updatedAt: '2021-04-15T02:29:37.826Z',
}
