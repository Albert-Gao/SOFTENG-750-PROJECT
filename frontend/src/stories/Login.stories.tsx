import Login from '../pages/Login/Login'
import { getStoryTemplate, Meta } from './utils'

export default {
    title: 'Example/Login',
    component: Login,
} as Meta

const Template = getStoryTemplate(Login)

export const LogInPage = Template.bind({})
LogInPage.args = {}
