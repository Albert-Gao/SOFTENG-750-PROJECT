import { ChangeAvatarModal } from '../../pages/Profile/components/ChangeAvatarModal'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Profile/ChangeAvatarModal',
    component: ChangeAvatarModal,
} as Meta

const Template = getStoryTemplate(ChangeAvatarModal)

export const Standard = Template.bind({})
Standard.args = {
    isOpen: true,
}
