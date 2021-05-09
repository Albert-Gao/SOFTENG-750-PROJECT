import { Introduction } from '../../pages/About/components/Introduction'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/About/Introduction',
    component: Introduction,
} as Meta

const Template = getStoryTemplate(Introduction)

export const Standard = Template.bind({})
Standard.args = {}
