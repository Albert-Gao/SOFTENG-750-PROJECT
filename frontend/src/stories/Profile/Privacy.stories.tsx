import Privacy from '../../pages/ProfilePrivacy/ProfilePrivacy'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Profile/Privacy',
    component: Privacy,
} as Meta

const Template = getStoryTemplate(Privacy)

export const Standard = Template.bind({})
Standard.args = {}
