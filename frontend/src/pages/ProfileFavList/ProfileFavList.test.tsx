import ProfileFavList from './ProfileFavList'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'
import { getFavNewsApi } from '../../api/news.api'

const MOCK_FAVLIST_RESPONSE = {
    total: 2,
    limit: 15,
    skip: 0,
    data: [
        {
            _id: '6077a0f1c36ee06aa53db3aa',
            title: 'Beat Instrumental',
            description:
                "Kevin Swift was among Beat Instrumental's reporters in 1966.During the 1970s, the features editor was Steve Turner,and Adam Sweeting also wrote for the magazine.[2]\n",
            authorWords: 'Hard to play this one!',
            votingRecords: [
                {
                    _id: '6077a0e4c36ee06aa53db3a9',
                    privacy: {
                        shouldShowEmail: false,
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
                    email: 'camus@camus.com',
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
                    nickName: 'albertgaohy',
                    avatar: 'A03pirates',
                    createdAt: '2021-04-15T02:07:37.711Z',
                    updatedAt: '2021-04-15T03:14:00.802Z',
                    __v: 0,
                },
            ],
            commentsCount: 0,
            wikipediaUrl: 'https://en.wikipedia.org/wiki/Beat_Instrumental',

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
            },
            createdAt: '2021-04-15T02:12:01.937Z',
            updatedAt: '2021-04-15T02:13:06.149Z',
            __v: 0,
        },
        {
            _id: '6077a0c0c36ee06aa53db3a8',
            title: 'The Rolling Stones',
            description:
                'The Rolling Stones are an English rock band formed in London in 1962. Diverging from the popular pop rock of the early-1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock.\n',
            authorWords: "Isn't this the best?",
            votingRecords: [
                {
                    _id: '6077a079c36ee06aa53db3a6',
                    privacy: {
                        shouldShowEmail: true,
                        shouldShowFavouritePage: true,
                        shouldShowSubmittedNews: true,
                    },
                    favourites: [],
                    email: 'a@a.com',
                    nickName: 'aRandomUser',
                    avatar: 'A16girl',
                    createdAt: '2021-04-15T02:10:01.910Z',
                    updatedAt: '2021-04-15T02:10:16.470Z',
                    __v: 0,
                },
                {
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
                    nickName: 'albertgaohy',
                    avatar: 'A03pirates',
                    createdAt: '2021-04-15T02:07:37.711Z',
                    updatedAt: '2021-04-15T03:14:00.802Z',
                    __v: 0,
                },
            ],
            commentsCount: 0,
            wikipediaUrl: 'https://en.wikipedia.org/wiki/The_Rolling_Stones',
            author: {
                _id: '6077a079c36ee06aa53db3a6',
                privacy: {
                    shouldShowEmail: true,
                    shouldShowFavouritePage: true,
                    shouldShowSubmittedNews: true,
                },
                favourites: [],
                email: 'a@a.com',
                nickName: 'aRandomUser',
                avatar: 'A16girl',
                createdAt: '2021-04-15T02:10:01.910Z',
                updatedAt: '2021-04-15T02:10:16.470Z',
            },
            createdAt: '2021-04-15T02:11:12.448Z',
            updatedAt: '2021-04-15T02:13:07.082Z',
            __v: 0,
        },
    ],
}

describe('<ProfileFavList />', () => {
    it('should render the loading icon', () => {
        const { getByTestId } = render(
            <TestWrapper>
                <ProfileFavList />
            </TestWrapper>,
        )

        expect(getByTestId('spinner')).toBeInTheDocument()
    })

    it('should fetch the favourite list', async () => {
        render(
            <TestWrapper>
                <ProfileFavList />
            </TestWrapper>,
        )

        const getFavNewsAPIMock = jest.spyOn(getFavNewsApi, 'query')

        await waitFor(() => {
            expect(getFavNewsAPIMock).toHaveBeenCalledTimes(1)
        })
    })
})
