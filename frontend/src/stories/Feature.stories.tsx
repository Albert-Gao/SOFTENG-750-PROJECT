import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Features, FeatureProps } from './FeaturePage'

export default {
    title: 'Example/Features',
    component: Features,
} as Meta

const Template: Story<FeatureProps> = (args) => <Features {...args} />

export const FeaturePage = Template.bind({})
FeaturePage.args = {}
