import ProfilePrivacy from './ProfilePrivacy'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'

describe('/ProfilePrivacy', () => {
    it('should render the title', () => {
        const { getByText } = render(
            <TestWrapper>
                <ProfilePrivacy />
            </TestWrapper>,
        )

        expect(getByText('Privacy')).toBeInTheDocument()
        expect(
            getByText('Manage you private settings of your public profile.'),
        ).toBeInTheDocument()
    })

    it('should render the Display email section', async () => {
        const { getByText } = render(
            <TestWrapper>
                <ProfilePrivacy />
            </TestWrapper>,
        )

        expect(getByText('Display email')).toBeInTheDocument()
        expect(
            getByText('Show your email address on your public profile page.'),
        ).toBeInTheDocument()
    })

    it('should render the Display Favourites section', async () => {
        const { getByText } = render(
            <TestWrapper>
                <ProfilePrivacy />
            </TestWrapper>,
        )

        expect(getByText('Display Favourites')).toBeInTheDocument()
        expect(
            getByText('Show your favourite list on your public profile page.'),
        ).toBeInTheDocument()
    })

    it('should render the Display Submitted News section', async () => {
        const { getByText } = render(
            <TestWrapper>
                <ProfilePrivacy />
            </TestWrapper>,
        )

        expect(getByText('Display Submitted News')).toBeInTheDocument()
        expect(
            getByText('Show your submitted news on your public profile page.'),
        ).toBeInTheDocument()
    })
})
