import User from './User'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'

describe('/User', () => {
    it('should render the Profile section', () => {
        const { getByText } = render(
            <TestWrapper>
                <User />
            </TestWrapper>,
        )

        expect(getByText('Profile')).toBeInTheDocument()
    })

    it('should render the Favourites section', async () => {
        const { getByText } = render(
            <TestWrapper>
                <User />
            </TestWrapper>,
        )

        expect(getByText('Favourites')).toBeInTheDocument()
    })

    it('should render the Submitted News section', async () => {
        const { getByText } = render(
            <TestWrapper>
                <User />
            </TestWrapper>,
        )

        expect(getByText('Submitted News')).toBeInTheDocument()
    })
})
