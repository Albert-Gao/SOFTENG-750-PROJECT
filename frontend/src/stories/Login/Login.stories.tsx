import Login from '../../pages/Login/Login'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Login/Login',
    component: Login,
} as Meta

const Template = getStoryTemplate(Login)

export const Standard = Template.bind({})
Standard.args = {}
