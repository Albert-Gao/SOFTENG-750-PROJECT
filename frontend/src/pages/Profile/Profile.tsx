import React from 'react'
import { ProfileSectionSubmitButton } from '../../components/ProfileSectionSubmitButton'

const Profile: React.FC = () => {
    return (
        <>
            <form
                className="divide-y divide-gray-200 lg:col-span-9"
                action="#"
                method="POST"
            >
                {/* <!-- Profile section --> */}
                <div className="px-4 py-6 sm:p-6 lg:pb-8">
                    <div>
                        <h2 className="text-lg font-medium leading-6 text-gray-900">
                            Profile
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            This information will be displayed publicly so be
                            careful what you share.
                        </p>
                    </div>

                    <div className="flex flex-col mt-6 lg:flex-row">
                        <div className="flex-grow space-y-6">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <div className="flex mt-1 rounded-md shadow-sm">
                                    <span className="items-center block px-6 py-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm">
                                        abc@abc.com
                                    </span>
                                </div>
                            </div>

                            <div className="col-span-12 sm:col-span-6">
                                <label
                                    htmlFor="first_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nick name
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="given-name"
                                    className="block w-1/2 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex-grow mt-6 lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                            <p
                                className="text-sm font-medium text-gray-700"
                                aria-hidden="true"
                            >
                                Photo
                            </p>
                            <div className="mt-1 lg:hidden">
                                <div className="flex items-center">
                                    <div
                                        className="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
                                        aria-hidden="true"
                                    >
                                        <img
                                            className="w-full h-full rounded-full"
                                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-5 rounded-md shadow-sm">
                                        <div className="relative flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md group hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500">
                                            <label
                                                htmlFor="user_photo"
                                                className="relative text-sm font-medium leading-4 text-gray-700 pointer-events-none"
                                            >
                                                <span>Change</span>
                                                <span className="sr-only">
                                                    {' '}
                                                    user photo
                                                </span>
                                            </label>
                                            <input
                                                id="user_photo"
                                                name="user_photo"
                                                type="file"
                                                className="absolute w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative hidden overflow-hidden rounded-full lg:block">
                                <img
                                    className="relative w-40 h-40 rounded-full"
                                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                                    alt=""
                                />
                                <label
                                    htmlFor="user-photo"
                                    className="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-black bg-opacity-75 opacity-0 hover:opacity-100 focus-within:opacity-100"
                                >
                                    <span>Change</span>
                                    <span className="sr-only"> user photo</span>
                                    <input
                                        type="file"
                                        id="user-photo"
                                        name="user-photo"
                                        className="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <ProfileSectionSubmitButton />
            </form>
        </>
    )
}

export default Profile
