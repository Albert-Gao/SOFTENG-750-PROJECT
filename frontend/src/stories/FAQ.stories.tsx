import FAQ from '../pages/FAQ/FAQ'
import { getStoryTemplate, Meta } from './utils'

export default {
    title: 'Pages/FAQ',
    component: FAQ,
} as Meta

const Template = getStoryTemplate(FAQ)

export const FAQPage = Template.bind({})
FAQPage.args = {}
