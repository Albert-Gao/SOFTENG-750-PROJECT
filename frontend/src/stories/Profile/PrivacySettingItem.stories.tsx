import { PrivacySettingItem } from '../../pages/ProfilePrivacy/components/PrivacySettingItem'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Profile/PrivacySettingItem',
    component: PrivacySettingItem,
} as Meta

const Template = getStoryTemplate(PrivacySettingItem)

export const Standard = Template.bind({})
Standard.args = {
    title: 'Display email',
    description: 'Show your email address on your public profile page.',
    isEnabled: true,
}
