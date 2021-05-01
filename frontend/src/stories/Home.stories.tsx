import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Homee, HomeProps } from './HomePage'

export default {
    title: 'Example/Home',
    component: Homee,
} as Meta

const Template: Story<HomeProps> = (args) => <Homee {...args} />

export const HomePage = Template.bind({})
HomePage.args = {}
