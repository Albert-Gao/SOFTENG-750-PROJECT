import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Aboutt, AboutProps } from './AboutPage'

export default {
    title: 'Example/About',
    component: Aboutt,
} as Meta

const Template: Story<AboutProps> = (args) => <Aboutt {...args} />

export const AboutPage = Template.bind({})
AboutPage.args = {}
