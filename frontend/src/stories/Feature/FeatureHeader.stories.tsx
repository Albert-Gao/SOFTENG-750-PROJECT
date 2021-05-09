import { FeatureHeader } from '../../pages/Features/components/FeatureHeader'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Features/FeatureHeader',
    component: FeatureHeader,
} as Meta

const Template = getStoryTemplate(FeatureHeader)

export const Standard = Template.bind({})
Standard.args = {}
