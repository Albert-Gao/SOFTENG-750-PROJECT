import { Teams } from '../../pages/About/components/Teams'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/About/Teams',
    component: Teams,
} as Meta

const Template = getStoryTemplate(Teams)

export const Standard = Template.bind({})
Standard.args = {}
