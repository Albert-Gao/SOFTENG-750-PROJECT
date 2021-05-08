import ProfileComments from './ProfileComments'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'
import { getCurrentUserCommentsAPI } from '../../api/comments.api'

const MOCK_COMMENTS_RESPONSE = {
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
                nickName: 'albertgaohy',
                avatar: 'A03pirates',
                createdAt: '2021-04-15T02:07:37.711Z',
                updatedAt: '2021-04-15T03:14:00.802Z',
                __v: 0,
            },
            news: '6077a124c36ee06aa53db3ac',
            text: 'I love it!',
            createdAt: '2021-04-15T02:29:37.715Z',
            updatedAt: '2021-04-15T02:29:37.715Z',
            __v: 0,
        },
    ],
}

describe('<ProfileComments />', () => {
    it('should render the loading icon', () => {
        const { getByTestId } = render(
            <TestWrapper>
                <ProfileComments />
            </TestWrapper>,
        )

        expect(getByTestId('spinner')).toBeInTheDocument()
    })

    it('should fetch the comments list', async () => {
        render(
            <TestWrapper>
                <ProfileComments />
            </TestWrapper>,
        )

        const getCurrentUserCommentsAPIMock = jest.spyOn(
            getCurrentUserCommentsAPI,
            'query',
        )

        await waitFor(() => {
            expect(getCurrentUserCommentsAPIMock).toHaveBeenCalledTimes(1)
        })
    })

    it('should render the comments list from the network response', async () => {
        const getCurrentUserCommentsAPIMock = jest.spyOn(
            getCurrentUserCommentsAPI,
            'query',
        )
        //@ts-expect-error     
        getCurrentUserCommentsAPIMock.mockResolvedValue(MOCK_COMMENTS_RESPONSE)

        const { getByText } = render(
            <TestWrapper>
                <ProfileComments />
            </TestWrapper>,
        )

        await waitFor(() => {
            expect(
                getByText(MOCK_COMMENTS_RESPONSE.data[0].author.nickName),
            ).toBeInTheDocument()
            expect(
                getByText(MOCK_COMMENTS_RESPONSE.data[0].text),
            ).toBeInTheDocument()
        })
    })
})
