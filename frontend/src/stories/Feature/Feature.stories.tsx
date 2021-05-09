import Features from '../../pages/Features/Features'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Features/Features',
    component: Features,
} as Meta

const Template = getStoryTemplate(Features)

export const Standard = Template.bind({})
Standard.args = {}
