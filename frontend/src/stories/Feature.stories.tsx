import Features from '../pages/Features/Features'
import { getStoryTemplate, Meta } from './utils'

export default {
    title: 'Example/Features',
    component: Features,
} as Meta

const Template = getStoryTemplate(Features)

export const FeaturePage = Template.bind({})
FeaturePage.args = {}
