import About from './About'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('/about', () => {
    it('should render the title', () => {
        const { getByText } = render(<About />)

        expect(
            getByText('SOFTENG 750/ COMPSCI 732 WikiChat Project Overview'),
        ).toBeInTheDocument()
    })

    it('should render 4 team members', () => {
        const { getByText } = render(<About />)

        expect(getByText('Albert Gao')).toBeInTheDocument()
        expect(getByText('Yuxin Chen')).toBeInTheDocument()
        expect(getByText('Evan Zhou')).toBeInTheDocument()
        expect(getByText('Henry Yang')).toBeInTheDocument()
    })
})
