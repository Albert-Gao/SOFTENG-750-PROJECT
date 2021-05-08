import Detail from './Detail'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'
import { getSingleNewsAPI } from '../../api/news.api'

const MOCK_SINGLE_NEWS_RESPONSE = {
    _id: '6077a124c36ee06aa53db3ac',
    title: 'George Harrison',
    description:
        'George Harrison[nb 1] MBE (25 February 1943 – 29 November 2001) was an English musician, singer-songwriter, and music and film producer who achieved international fame as the lead guitarist of the Beatles. Sometimes called "the quiet Beatle", Harrison embraced Indian culture and helped broaden the scope of popular music through his incorporation of Indian instrumentation and Hindu-aligned spirituality in the Beatles\' work.Although the majority of the band\'s songs were written by John Lennon and Paul McCartney, most Beatles albums from 1965 onwards contained at least two Harrison compositions. His songs for the group include "Taxman", "Within You Without You", "While My Guitar Gently Weeps", "Here Comes the Sun" and "Something".\n',
    authorWords: 'Dude is a legend!',
    votingRecords: [
        {
            _id: '6077a0e4c36ee06aa53db3a9',
            privacy: {
                shouldShowEmail: false,
                shouldShowFavouritePage: true,
                shouldShowSubmittedNews: true,
            },
            favourites: [],
            email: 'camus@camus.com',
            password:
                '$2a$10$GSXb.2HbD3I07xNBrvD7Z.ABFxxqn6X92TlEPjyshxWWohovmhz76',
            nickName: 'Camus',
            avatar: 'A31boy',
            createdAt: '2021-04-15T02:11:48.285Z',
            updatedAt: '2021-04-15T02:20:22.314Z',
            __v: 0,
        },
        {
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
    ],
    commentsCount: 1,
    wikipediaUrl: 'https://en.wikipedia.org/wiki/George_Harrison',
    author: {
        _id: '6077a0e4c36ee06aa53db3a9',
        privacy: {
            shouldShowEmail: false,
            shouldShowFavouritePage: true,
            shouldShowSubmittedNews: true,
        },
        favourites: [],
        email: 'camus@camus.com',
        nickName: 'Camus',
        avatar: 'A31boy',
        createdAt: '2021-04-15T02:11:48.285Z',
        updatedAt: '2021-04-15T02:20:22.314Z',
        __v: 0,
    },
    createdAt: '2021-04-15T02:12:52.290Z',
    updatedAt: '2021-04-15T02:29:37.826Z',
    __v: 0,
}

describe('/detail', () => {
    it('should render the loading icon', () => {
        const { getByTestId } = render(
            <TestWrapper>
                <Detail />
            </TestWrapper>,
        )

        expect(getByTestId('spinner')).toBeInTheDocument()
    })

    it('should fetch the news', async () => {
        render(
            <TestWrapper>
                <Detail />
            </TestWrapper>,
        )

        const getSingleNewsAPIMock = jest.spyOn(getSingleNewsAPI, 'query')

        await waitFor(() => {
            expect(getSingleNewsAPIMock).toHaveBeenCalledTimes(1)
        })
    })

    it('should render the wikipedia content from the network response', async () => {
        const getSingleNewsAPIMock = jest.spyOn(getSingleNewsAPI, 'query')
        // @ts-expect-error
        getSingleNewsAPIMock.mockResolvedValue(MOCK_SINGLE_NEWS_RESPONSE)

        const { getByText, getAllByText } = render(
            <TestWrapper>
                <Detail />
            </TestWrapper>,
        )

        await waitFor(() => {
            expect(
                getByText(MOCK_SINGLE_NEWS_RESPONSE.title),
            ).toBeInTheDocument()
            expect(
                getByText(MOCK_SINGLE_NEWS_RESPONSE.authorWords),
            ).toBeInTheDocument()
            expect(getAllByText('2 Likes')).toHaveLength(2)
            expect(
                getAllByText(MOCK_SINGLE_NEWS_RESPONSE.author.nickName),
            ).toHaveLength(2)
            expect(
                getAllByText(
                    `${MOCK_SINGLE_NEWS_RESPONSE.commentsCount} comments`,
                ),
            ).toHaveLength(2)
        })
    })
})
