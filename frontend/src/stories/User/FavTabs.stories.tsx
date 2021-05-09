import { FavTab } from '../../pages/User/components/FavTab'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/User/FavTab',
    component: FavTab,
} as Meta<typeof FavTab>

const Template = getStoryTemplate(FavTab)

export const Standard = Template.bind({})
Standard.args = {
    favNews: [
        {
            _id: '6077a124c36ee06aa53db3ac',
            title: 'George Harrison',
            description:
                'George Harrison[nb 1] MBE (25 February 1943 – 29 November 2001) was an English musician, singer-songwriter, and music and film producer who achieved international fame as the lead guitarist of the Beatles. Sometimes called "the quiet Beatle", Harrison embraced Indian culture and helped broaden the scope of popular music through his incorporation of Indian instrumentation and Hindu-aligned spirituality in the Beatles\' work.Although the majority of the band\'s songs were written by John Lennon and Paul McCartney, most Beatles albums from 1965 onwards contained at least two Harrison compositions. His songs for the group include "Taxman", "Within You Without You", "While My Guitar Gently Weeps", "Here Comes the Sun" and "Something".\n',
            authorWords: 'Dude is a legend!',
            votingRecords: [
                // @ts-expect-error
                '6077a0e4c36ee06aa53db3a9',
                '60779fe9c36ee06aa53db3a2',
            ],
            commentsCount: 1,
            wikipediaUrl: 'https://en.wikipedia.org/wiki/George_Harrison',
            // @ts-expect-error
            author: '6077a0e4c36ee06aa53db3a9',
            createdAt: '2021-04-15T02:12:52.290Z',
            updatedAt: '2021-04-15T02:29:37.826Z',
        },
    ],
}
