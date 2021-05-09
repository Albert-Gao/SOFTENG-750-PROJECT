import Features from './Features'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

describe('/features', () => {
    it('should render the title', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Features />
            </MemoryRouter>,
        )

        expect(getByText('Make Wikipedia more social')).toBeInTheDocument()
    })

    it('should render 6 core features', () => {
        const { getAllByTestId } = render(
            <MemoryRouter>
                <Features />
            </MemoryRouter>,
        )

        expect(getAllByTestId('feature-slot')).toHaveLength(6)
    })

    it('should render core features with correct titles', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Features />
            </MemoryRouter>,
        )

        expect(getByText('Upload Wiki Topics')).toBeInTheDocument()
        expect(getByText('Authenticated Account')).toBeInTheDocument()
        expect(getByText('Quick Update')).toBeInTheDocument()
        expect(getByText('Safe Browsing')).toBeInTheDocument()
        expect(getByText('Customized Setting')).toBeInTheDocument()
        expect(getByText('Interactive Web')).toBeInTheDocument()
    })

    it('should render a advertisement', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Features />
            </MemoryRouter>,
        )

        expect(getByText('Ready to get started?')).toBeInTheDocument()
    })
})
