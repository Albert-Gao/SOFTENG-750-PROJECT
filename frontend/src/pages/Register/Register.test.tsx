import Register from './Register'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'
import { registerAPI } from '../../api/auth.api'

describe('/register', () => {
    it('should render the layout', () => {
        const { getByText } = render(
            <TestWrapper>
                <Register />
            </TestWrapper>,
        )

        expect(getByText('Join WikiChat for free')).toBeInTheDocument()
    })

    it('should send the user email and password to the backend', async () => {
        const { getByTestId } = render(
            <TestWrapper>
                <Register />
            </TestWrapper>,
        )

        const registerAPIMock = jest.spyOn(registerAPI, 'query')

        fireEvent.change(getByTestId('email-address'), {
            target: {
                value: 'albertgaohy@gmail.com',
            },
        })

        fireEvent.change(getByTestId('password'), {
            target: {
                value: '123',
            },
        })

        fireEvent.click(getByTestId('submit'))

        await waitFor(() => {
            expect(registerAPIMock).toHaveBeenCalledWith({
                email: 'albertgaohy@gmail.com',
                password: '123',
            })
        })
    })

    it('should not send the user email and password to the backend when invalid email', async () => {
        const { getByTestId } = render(
            <TestWrapper>
                <Register />
            </TestWrapper>,
        )

        const registerAPIMock = jest.spyOn(registerAPI, 'query')

        fireEvent.change(getByTestId('email-address'), {
            target: {
                value: 'abc',
            },
        })

        fireEvent.change(getByTestId('password'), {
            target: {
                value: '123',
            },
        })

        fireEvent.click(getByTestId('submit'))

        await waitFor(() => {
            expect(registerAPIMock).toHaveBeenCalledTimes(0)
        })
    })
})
