import { getStoryTemplate, Meta } from '../utils'
import { NewsListItem } from '../../pages/Home/components/NewsListItem/NewsListItem'

export default {
    title: 'Pages/Home',
    component: NewsListItem,
} as Meta<typeof NewsListItem>

const Template = getStoryTemplate(NewsListItem)

export const HomePageNews = Template.bind({})
HomePageNews.args = {
    authorAvatar: 'A50king',
    authorName: '123456789',
    authorId: '608d0ca636814a003e2da1e9',
    authorWords: 'xxx',
    commentsCount: 0,
    newsDate: '2021-05-08T08:21:22.264Z',
    description:
        " Sfoglia l'indice   Consulta il sommario    Naviga tra i portali tematici↵",
    title: "Wikipedia, l'enciclopedia libera",
    votingRecords: [],
    wikipediaUrl: 'https://it.wikipedia.org/wiki/Pagina_principale',
    id: '60964a02df818d003d9b0f9a',
}
