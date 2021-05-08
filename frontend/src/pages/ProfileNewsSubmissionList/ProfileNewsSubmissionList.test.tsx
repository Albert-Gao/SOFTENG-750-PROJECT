import ProfileNewsSubmissionList from './ProfileNewsSubmissionList'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'
import { getCurrentUserSubmittedNewsAPI } from '../../api/news.api'

const MOCK_SUBMISSIONS_RESPONSE = {
    total: 1,
    limit: 50,
    skip: 0,
    data: [
        {
            _id: '6077a511c36ee06aa53db3ad',
            author: {
                _id: '60779fe9c36ee06aa53db3a2',
                privacy: {
                    shouldShowEmail: true,
                    shouldShowFavouritePage: true,
                    shouldShowSubmittedNews: true,
                },
                favourites: [
                    '6077a124c36ee06aa53db3ac',
                    '6077a0ffc36ee06aa53db3ab',
                    '6077a0f1c36ee06aa53db3aa',
                    '6077a0c0c36ee06aa53db3a8',
                    '6077a0a0c36ee06aa53db3a7',
                ],
                email: 'albertgaohy@gmail.com',
                password:
                    '$2a$10$nZS/SEX.Vq7NR1L1zk50pO.x0l6n/fEbOgAHPoLGm.S/7AiGV6MEO',
                nickName: 'albertgaohy',
                avatar: 'A03pirates',
                createdAt: '2021-04-15T02:07:37.711Z',
                updatedAt: '2021-04-15T03:14:00.802Z',
                __v: 0,
            },
            title:"Wikipedia, l'enciclopedia libera",
            description:" Sfoglia l'indice   Consulta il sommario    Naviga tra i portali tematici\n",
            authorWords:"xxx",
            votingRecords:[],
            commentsCount:0,
            wikipediaUrl:"https://it.wikipedia.org/wiki/Pagina_principale",
            createdAt:"2021-05-08T08:21:22.264Z",
            updatedAt:"2021-05-08T08:21:22.264Z",
            __v:0
        },
    ],
}

describe('<ProfileNewsSubmissionList />', () => {
    it('should render the loading icon', () => {
        const { getByTestId } = render(
            <TestWrapper>
                <ProfileNewsSubmissionList />
            </TestWrapper>,
        )

        expect(getByTestId('spinner')).toBeInTheDocument()
    })

    it('should fetch the submission list', async () => {
        render(
            <TestWrapper>
                <ProfileNewsSubmissionList />
            </TestWrapper>,
        )

        const getCurrentUserSubmittedNewsAPIMock = jest.spyOn(
            getCurrentUserSubmittedNewsAPI,
            'query',
        )

        await waitFor(() => {
            expect(getCurrentUserSubmittedNewsAPIMock).toHaveBeenCalledTimes(1)
        })
    })

    it('should render the submission list from the network response', async () => {
        const getCurrentUserSubmittedNewsAPIMock = jest.spyOn(
            getCurrentUserSubmittedNewsAPI,
            'query',
        )

        getCurrentUserSubmittedNewsAPIMock.mockResolvedValue(MOCK_SUBMISSIONS_RESPONSE)

        const { getByText } = render(
            <TestWrapper>
                <ProfileNewsSubmissionList />
            </TestWrapper>,
        )

        await waitFor(() => {
            expect(
                getByText(MOCK_SUBMISSIONS_RESPONSE.data[0].author.nickName),
            ).toBeInTheDocument()
            expect(
                getByText(MOCK_SUBMISSIONS_RESPONSE.data[0].title),
            ).toBeInTheDocument()
        })
    })
})