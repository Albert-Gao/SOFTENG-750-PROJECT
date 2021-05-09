import FAQ from './FAQ'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe('/faq', () => {
    it('should render the title', () => {
        const { getByText } = render(
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>,
        )

        expect(getByText('Frequently asked questions')).toBeInTheDocument()
    })

    it('should render questions', () => {
        const { getAllByTestId } = render(
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>,
        )

        expect(getAllByTestId('faq-question')).toHaveLength(5)
    })

    it('should render the answer if clicks the question', () => {
        const { getAllByTestId } = render(
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>,
        )

        const questions = getAllByTestId('faq-question')

        expect(questions).toHaveLength(5)

        const firstQuestion = questions[0]

        fireEvent.click(firstQuestion)

        expect(getAllByTestId('faq-answer')).toHaveLength(1)
    })

    it('should render the advertisement', () => {
        const { getByText } = render(
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>,
        )

        expect(getByText('Ready to dive in?')).toBeInTheDocument()
    })
})
