import Login from './Login'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TestWrapper } from '../../utils/testUtils'
import { loginAPI } from '../../api/auth.api'

describe('/login', () => {
    it('should render the layout', () => {
        const { getByText } = render(
            <TestWrapper>
                <Login />
            </TestWrapper>,
        )

        expect(getByText('Sign in to your account')).toBeInTheDocument()
    })

    it('should send the user email and password to the backend', async () => {
        const { getByTestId } = render(
            <TestWrapper>
                <Login />
            </TestWrapper>,
        )

        const loginAPIMock = jest.spyOn(loginAPI, 'query')

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
            expect(loginAPIMock).toHaveBeenCalledWith({
                email: 'albertgaohy@gmail.com',
                password: '123',
            })
        })
    })

    it('should not send the user email and password to the backend when invalid email', async () => {
        const { getByTestId } = render(
            <TestWrapper>
                <Login />
            </TestWrapper>,
        )

        const loginAPIMock = jest.spyOn(loginAPI, 'query')

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
            expect(loginAPIMock).toHaveBeenCalledTimes(0)
        })
    })
})
