import User from './User'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'
import { getOtherUserInfoApi } from '../../api/users.api'

const MOCK_USER_INFO_RESPONSE = {
    avatar: 'A49bellboy',
    createdAt: '2021-05-09T08:26:07.783Z',
    email: 'abc@abc.com',
    favourites: [],
    nickName: 'abc',
    privacy: {
        shouldShowEmail: true,
        shouldShowFavouritePage: true,
        shouldShowSubmittedNews: true,
    },
    shouldShowEmail: true,
    shouldShowFavouritePage: true,
    shouldShowSubmittedNews: true,
    updatedAt: '2021-05-09T08:26:07.783Z',
    _id: '60979c9f9a256508f63a89be',
}

describe('/User', () => {
    it('should fetch the user data', async () => {
        render(
            <TestWrapper>
                <User />
            </TestWrapper>,
        )

        const getOtherUserInfoApiMock = jest.spyOn(getOtherUserInfoApi, 'query')

        await waitFor(() => {
            expect(getOtherUserInfoApiMock).toHaveBeenCalledTimes(1)
        })
    })

    it('should render the user info from the response', async () => {
        const getOtherUserInfoApiMock = jest.spyOn(getOtherUserInfoApi, 'query')
        getOtherUserInfoApiMock.mockResolvedValue(
            // @ts-expect-error
            MOCK_USER_INFO_RESPONSE,
        )

        const { getAllByText, getByText } = render(
            <TestWrapper>
                <User />
            </TestWrapper>,
        )

        await waitFor(() => {
            expect(getAllByText(MOCK_USER_INFO_RESPONSE.nickName)).toHaveLength(
                2,
            )
            expect(getByText(MOCK_USER_INFO_RESPONSE.email)).toBeInTheDocument()
        })
    })

    it('should hide the user email if the user choose to hide', async () => {
        const getOtherUserInfoApiMock = jest.spyOn(getOtherUserInfoApi, 'query')
        MOCK_USER_INFO_RESPONSE.privacy.shouldShowEmail = false
        getOtherUserInfoApiMock.mockResolvedValue(
            // @ts-expect-error
            MOCK_USER_INFO_RESPONSE,
        )

        const { getByText } = render(
            <TestWrapper>
                <User />
            </TestWrapper>,
        )

        await waitFor(() => {
            expect(() => getByText(MOCK_USER_INFO_RESPONSE.email)).toThrow(
                'Unable to find an element',
            )
            expect(
                getByText('This user hides his/her email.'),
            ).toBeInTheDocument()
        })
    })
})
