import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { PATHS } from '../../routes/routes.constants'
import { FormErrorText } from '../../components/FormErrorText'
import { registerAPI } from '../../api/auth.api'
import { Auth } from '../../utils/Auth'
import { emailRegEx } from '../../utils/emailRegEx'

const Header: React.FC = () => (
    <div>
        <Link to={PATHS.HOME}>
            <img
                className="w-auto h-12"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
            />
        </Link>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Join WikiChat for free
        </h2>
        <p className="mt-2 text-sm text-gray-600 max-w">
            Or
            <Link
                to={PATHS.LOGIN}
                className="ml-2 font-medium text-indigo-600 hover:text-indigo-500"
            >
                login if you are already registered
            </Link>
        </p>
    </div>
)

const Register: React.FC = () => {
    const { register, handleSubmit, errors, formState } = useForm<{
        email: string
        password: string
    }>()
    const mutation = useMutation(registerAPI.query)
    const history = useHistory()

    return (
        <div className="flex min-h-screen bg-white">
            <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="w-full max-w-sm mx-auto lg:w-96">
                    <Header />

                    <div className="mt-8">
                        <div className="mt-6">
                            <form
                                className="space-y-6"
                                onSubmit={handleSubmit(async (data) => {
                                    try {
                                        const response = await mutation.mutateAsync(
                                            data,
                                        )

                                        if (response.data?.accessToken) {
                                            Auth.saveAuth(
                                                response.data?.accessToken,
                                            )
                                            history.replace(PATHS.HOME)
                                        } else {
                                            alert(
                                                'Something wrong with server, please try again later',
                                            )
                                        }
                                    } catch (e) {
                                        console.table('e', e)
                                        alert(
                                            (e as AxiosError).response?.data
                                                ?.message,
                                        )
                                    }
                                })}
                            >
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            ref={register({
                                                required: true,
                                                pattern: emailRegEx,
                                            })}
                                            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <FormErrorText isError={!!errors.email}>
                                            Please enter valid email
                                        </FormErrorText>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            ref={register({ required: true })}
                                            autoComplete="current-password"
                                            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <FormErrorText
                                            isError={!!errors.password}
                                        >
                                            Please enter your password
                                        </FormErrorText>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        disabled={formState.isSubmitting}
                                        type="submit"
                                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm disabled:opacity-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Join
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex-1 hidden w-0 lg:block">
                <img
                    className="absolute inset-0 object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Register
