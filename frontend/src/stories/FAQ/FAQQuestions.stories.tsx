import { Question } from '../../pages/FAQ/components/Question'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/FAQ/Question',
    component: Question,
} as Meta

const Template = getStoryTemplate(Question)

export const Standard = Template.bind({})
Standard.args = {
    question: 'Sample question',
    answer: 'Sample answer',
}
