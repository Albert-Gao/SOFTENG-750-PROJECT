import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { LoginPage, LoginProps } from './LoginPage'

export default {
    title: 'Example/Login',
    component: LoginPage,
} as Meta

const Template: Story<LoginProps> = (args) => <LoginPage {...args} />

export const LogInPage = Template.bind({})
LogInPage.args = {}
