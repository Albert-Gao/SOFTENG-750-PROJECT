import Register from '../pages/Register/Register'
import { getStoryTemplate, Meta } from './utils'

export default {
    title: 'Pages/Register',
    component: Register,
} as Meta

const Template = getStoryTemplate(Register)

export const Standard = Template.bind({})
Standard.args = {}
