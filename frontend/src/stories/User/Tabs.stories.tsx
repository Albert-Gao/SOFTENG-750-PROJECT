import { Tabs } from '../../pages/User/components/Tabs'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/User/Tabs',
    component: Tabs,
    argTypes: {
        setCurrentTab: { action: 'setCurrentTab' },
    },
} as Meta<typeof Tabs>

const Template = getStoryTemplate(Tabs)

export const Standard = Template.bind({})
Standard.args = {
    currentTab: 'fav',
}
