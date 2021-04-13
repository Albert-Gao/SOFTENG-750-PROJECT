import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { ProfileSectionSubmitButton } from '../../components/ProfileSectionSubmitButton'
import { userAtom } from '../../state'
import { getAvatarSVG } from '../../utils/getAvatarSVG'
import { ChangeAvatarModal } from './components/ChangeAvatarModal'

const Profile: React.FC = () => {
    const [{ email, avatar }] = useAtom(userAtom)
    const [isOpen, setIsOpen] = useState(false)

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
                                        {email}
                                    </span>
                                </div>
                                <p className="mt-1 text-xs text-gray-500">
                                    You can not change the email once
                                    registered!
                                </p>
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
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <img
                                            className="w-full h-full rounded-full"
                                            src={getAvatarSVG(avatar)}
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="relative hidden overflow-hidden rounded-full lg:block">
                                <img
                                    className="relative w-40 h-40 bg-gray-200 rounded-full"
                                    src={getAvatarSVG(avatar)}
                                    alt="avatar"
                                />
                                <label
                                    onClick={() => setIsOpen(true)}
                                    htmlFor="user-photo"
                                    className="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-black bg-opacity-75 opacity-0 hover:opacity-100"
                                >
                                    <span>Change</span>
                                    <span className="sr-only">user photo</span>
                                    <input
                                        type="text"
                                        id="user-photo"
                                        name="user-photo"
                                        className="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                                    />
                                </label>
                            </div>
                            <ChangeAvatarModal
                                isOpen={isOpen}
                                closeModal={() => setIsOpen(false)}
                            />
                        </div>
                    </div>
                </div>
                <ProfileSectionSubmitButton />
            </form>
        </>
    )
}

export default Profile
