import { TabButton } from '../../pages/User/components/TabButton'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/User/TabButton',
    component: TabButton,
    argTypes: {
        onClick: { action: 'onClick' },
    },
} as Meta<typeof TabButton>

const Template = getStoryTemplate(TabButton)

export const Standard = Template.bind({})
Standard.args = {
    children: 'tab button text',
}
