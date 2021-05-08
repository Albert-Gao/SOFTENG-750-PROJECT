import { Container } from '../components/AppShell/components/Main'
import { SubmitButton } from '../components/AppShell/components/PageHeader'
import { getStoryTemplate, Meta } from './utils'
import { NewsListItem } from '../pages/Home/components/NewsListItem/NewsListItem'

const data = [
    {
        author: {
            avatar: 'A50king',
            createdAt: '2021-05-01T08:09:10.807Z',
            email: '123456789@qq.com',
            favourites: [],
            nickName: '123456789',
            privacy: {
                shouldShowEmail: true,
                shouldShowFavouritePage: true,
                shouldShowSubmittedNews: true,
            },
            updatedAt: '2021-05-01T08:09:10.807Z',
            _id: '608d0ca636814a003e2da1e9',
        },
        authorWords: 'xxx',
        commentsCount: 0,
        createdAt: '2021-05-08T08:21:22.264Z',
        description:
            " Sfoglia l'indice   Consulta il sommario    Naviga tra i portali tematici↵",
        title: "Wikipedia, l'enciclopedia libera",
        updatedAt: '2021-05-08T08:21:22.264Z',
        votingRecords: [],
        wikipediaUrl: 'https://it.wikipedia.org/wiki/Pagina_principale',
        __v: 0,
        _id: '60964a02df818d003d9b0f9a',
    },
]

const trial: React.FC = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className={`pb-32 bg-indigo-600`}>
                <header className="py-10">
                    <div className="flex justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-white">Home</h1>

                        <SubmitButton />
                    </div>
                </header>
            </div>
            <Container isAuth={true}>
                <div className="px-1 py-6 rounded-lg sm:px-6">
                    <ul className="flex flex-col items-center space-y-4">
                        <li
                            key="60964a02df818d003d9b0f9a"
                            className="w-full max-w-2xl px-4 py-6 bg-white rounded-lg shadow sm:p-6"
                        >
                            <NewsListItem
                                authorId="608d0ca636814a003e2da1e9"
                                id="60964a02df818d003d9b0f9a"
                                wikipediaUrl="https://it.wikipedia.org/wiki/Pagina_principale"
                                authorName="123456789"
                                newsDate="2021-05-08T08:21:22.264Z"
                                title="Wikipedia, l'enciclopedia libera"
                                authorWords="xxx"
                                description=" Sfoglia l'indice   Consulta il sommario    Naviga tra i portali tematici↵"
                                authorAvatar="A50king"
                                commentsCount={0}
                                votingRecords={[]}
                                refetch={null}
                            />
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default {
    title: 'Pages/Home',
    component: trial,
} as Meta

const Template = getStoryTemplate(trial)

export const HomePage = Template.bind({})
HomePage.args = {}
