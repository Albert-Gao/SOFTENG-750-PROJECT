import About from '../pages/About/About'
import { getStoryTemplate, Meta } from './utils'

export default {
    title: 'Pages/About',
    component: About,
} as Meta

const Template = getStoryTemplate(About)

export const AboutPage = Template.bind({})
AboutPage.args = {}
