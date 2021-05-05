import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Register2, RegisterProps } from './RegisterPage'

export default {
    title: 'Example/Register',
    component: Register2,
} as Meta

const Template: Story<RegisterProps> = (args) => <Register2 {...args} />

export const RegisterPage = Template.bind({})
RegisterPage.args = {}
