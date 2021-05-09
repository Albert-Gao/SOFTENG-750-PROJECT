import { CallToAction } from '../../pages/Features/components/CallToAction'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Features/CallToAction',
    component: CallToAction,
} as Meta

const Template = getStoryTemplate(CallToAction)

export const Standard = Template.bind({})
Standard.args = {}
