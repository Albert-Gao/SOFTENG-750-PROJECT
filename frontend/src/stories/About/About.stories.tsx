import About from '../../pages/About/About'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/About/About',
    component: About,
} as Meta

const Template = getStoryTemplate(About)

export const Standard = Template.bind({})
Standard.args = {}
