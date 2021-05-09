import { LightCallToAction } from '../../pages/FAQ/components/LightCallToAction'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/FAQ/LightCallToAction',
    component: LightCallToAction,
} as Meta

const Template = getStoryTemplate(LightCallToAction)

export const Standard = Template.bind({})
Standard.args = {}
