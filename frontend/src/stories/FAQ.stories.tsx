import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { FAQQ, FAQProps } from './FAQPage'

export default {
    title: 'Example/FAQ',
    component: FAQQ,
} as Meta

const Template: Story<FAQProps> = (args) => <FAQQ {...args} />

export const FAQPage = Template.bind({})
FAQPage.args = {}
