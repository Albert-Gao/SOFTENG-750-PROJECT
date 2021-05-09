import { NewsDate } from '../../pages/Home/components/NewsListItem/components/NewsDate'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/Home/NewsDate',
    component: NewsDate,
    argTypes: {},
} as Meta<typeof NewsDate>

const Template = getStoryTemplate(NewsDate)

export const Standard = Template.bind({})
Standard.args = {
    dateString: '2021-05-08T07:03:27.602Z',
}
