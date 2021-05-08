import Profile from './Profile'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'
import { getSingleNewsAPI } from '../../api/news.api'

describe('/profile', () => {
    it('should render the title', () => {
        const { getByText } = render(
            <TestWrapper>
                <Profile />
            </TestWrapper>,
        )

        expect(getByText('Profile')).toBeInTheDocument()
        expect(
            getByText('Your profile will be displayed to the public.'),
        ).toBeInTheDocument()
    })

    it('should render the email section', async () => {
        const { getByText } = render(
            <TestWrapper>
                <Profile />
            </TestWrapper>,
        )

        expect(getByText('Email')).toBeInTheDocument()
        expect(
            getByText('You can not change the email once registered!'),
        ).toBeInTheDocument()
    })

    it('should render the nick name section', async () => {
        const { getByText } = render(
            <TestWrapper>
                <Profile />
            </TestWrapper>,
        )

        expect(getByText('Nick name')).toBeInTheDocument()
        expect(
            getByText('Remember to save after changing!'),
        ).toBeInTheDocument()
    })

    it('should render the Photo section', async () => {
        const { getByText } = render(
            <TestWrapper>
                <Profile />
            </TestWrapper>,
        )

        expect(getByText('Photo')).toBeInTheDocument()
    })
})
