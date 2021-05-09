import { AuthorName } from '../../pages/Home/components/NewsListItem/components/AuthorName'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Home/AuthorName',
    component: AuthorName,
    argTypes: {},
} as Meta<typeof AuthorName>

const Template = getStoryTemplate(AuthorName)

export const Standard = Template.bind({})
Standard.args = {
    name: 'albert',
}
