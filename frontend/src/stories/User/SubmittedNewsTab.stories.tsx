import { SubmittedNewsTab } from '../../pages/User/components/SubmittedNewsTab'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/User/SubmittedNewsTab',
    component: SubmittedNewsTab,
} as Meta<typeof SubmittedNewsTab>

const Template = getStoryTemplate(SubmittedNewsTab)

export const Standard = Template.bind({})
Standard.args = {
    userId: '12312321312',
}
