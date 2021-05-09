import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { PATHS } from '../../routes/routes.constants'
import { useForm } from 'react-hook-form'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { FormErrorText } from '../../components/FormErrorText'
import { emailRegEx } from '../../utils/emailRegEx'
import { loginAPI } from '../../api/auth.api'
import { Auth } from '../../utils/Auth'
import { userAtom } from '../../state'
import { useAtom } from 'jotai'

const LoginHeader: React.FC = () => (
    <div>
        <Link to={PATHS.HOME}>
            <img
                className="w-auto h-12 mx-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
            />
        </Link>
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600">
            or
            <Link
                to={PATHS.REGISTER}
                className="ml-2 font-medium text-indigo-600 hover:text-indigo-500"
            >
                join WikiChat for free
            </Link>
        </p>
    </div>
)

const Login: React.FC = () => {
    const { register, handleSubmit, errors, formState } = useForm<{
        email: string
        password: string
    }>()
    const mutation = useMutation(loginAPI?.query)
    const [, setUserAtom] = useAtom(userAtom)
    const history = useHistory()

    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <LoginHeader />
                <form
                    className="mt-8 space-y-6"
                    onSubmit={handleSubmit(async (data) => {
                        try {
                            const response = await mutation.mutateAsync(data)

                            if (response?.accessToken) {
                                if (response.user) {
                                    const user = response.user
                                    Auth.saveUserInfo(user)
                                    setUserAtom({
                                        avatar: user.avatar,
                                        createdAt: user.createdAt,
                                        email: user.email,
                                        nickName: user.nickName,
                                        updatedAt: user.updatedAt,
                                        _id: user._id,
                                        favourites: user.favourites,
                                        privacy: {
                                            shouldShowEmail:
                                                user.privacy.shouldShowEmail,
                                            shouldShowFavouritePage:
                                                user.privacy
                                                    .shouldShowFavouritePage,
                                            shouldShowSubmittedNews:
                                                user.privacy
                                                    .shouldShowSubmittedNews,
                                        },
                                    })
                                }

                                Auth.saveAuth(response?.accessToken)
                                history.replace(PATHS.HOME)
                            } else {
                                alert(
                                    'Something wrong with server, please try again later',
                                )
                            }
                        } catch (e) {
                            console.log('e', e)
                            alert((e as AxiosError).response?.data?.message)
                        }
                    })}
                >
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                data-testid="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                ref={register({
                                    required: true,
                                    pattern: emailRegEx,
                                })}
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                            <FormErrorText isError={!!errors.email}>
                                Please enter valid email
                            </FormErrorText>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                data-testid="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                ref={register({ required: true })}
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                            <FormErrorText isError={!!errors.password}>
                                Please enter your password
                            </FormErrorText>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label
                                htmlFor="remember_me"
                                className="block ml-2 text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link
                                to={PATHS.HOME}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            data-testid="submit"
                            disabled={formState.isSubmitting}
                            type="submit"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md disabled:opacity-50 group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* <!-- Heroicon name: solid/lock-closed --> */}
                                <svg
                                    className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
