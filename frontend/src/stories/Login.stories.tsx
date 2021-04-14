import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Login, LoginProps } from './Login'

export default {
    title: 'Example/Login',
    component: Login,
} as Meta

const Template: Story<LoginProps> = (args) => <Login {...args} />

export const LogIn = Template.bind({})
LogIn.args = {
    user: {},
}
