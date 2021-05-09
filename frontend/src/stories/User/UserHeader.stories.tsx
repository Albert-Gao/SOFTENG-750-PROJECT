import { UserHeader } from '../../pages/User/components/UserHeader'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/User/UserHeader',
    component: UserHeader,
} as Meta<typeof UserHeader>

const Template = getStoryTemplate(UserHeader)

export const Standard = Template.bind({})
Standard.args = {
    nickName: 'albert',
}
