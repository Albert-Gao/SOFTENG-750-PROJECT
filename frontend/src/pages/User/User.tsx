import React from 'react'

const Box: React.FC = ({ children }) => (
    <div
        className="flex h-screen overflow-hidden bg-white"
        style={{ height: 'max-content' }}
    >
        <div className="flex flex-col flex-1 w-0">
            <main className="relative flex-1 focus:outline-none">
                <div className="py-24 xl:py-10">
                    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
                        {children}{' '}
                    </div>
                </div>
            </main>
        </div>
    </div>
)

const User: React.FC = () => {
    return (
        <Box>
            <article>
                {/* <!-- Profile header --> */}
                <div>
                    <div className="flex max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div className="flex">
                                <img
                                    className="z-40 w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                <div className="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                        Ricardo Cooper
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 hidden min-w-0 mt-6 sm:block 2xl:hidden">
                            <h1 className="text-2xl font-bold text-gray-900 truncate">
                                Ricardo Cooper
                            </h1>
                        </div>
                    </div>
                </div>

                {/* <!-- Tabs --> */}
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                    <div className="border-b border-gray-200">
                        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                            <nav
                                className="flex -mb-px space-x-8"
                                aria-label="Tabs"
                            >
                                {/* <!-- Current: "border-pink-500 text-gray-900", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
                                <a
                                    href="#"
                                    className="px-1 py-4 text-sm font-medium text-gray-900 border-b-2 border-pink-500 whitespace-nowrap"
                                    aria-current="page"
                                >
                                    Profile
                                </a>

                                <a
                                    href="#"
                                    className="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
                                >
                                    Favourites
                                </a>

                                <a
                                    href="#"
                                    className="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
                                >
                                    Submitted News
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* <!-- Description list --> */}
                <div className="max-w-5xl px-4 mx-auto mt-6 sm:px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Phone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                (555) 123-4567
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                ricardocooper@example.com
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Title
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Senior Front-End Developer
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Team
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Product Development
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Location
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                San Francisco
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Sits
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Oasis, 4th floor
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Salary
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                $145,000
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Birthday
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                June 8, 1990
                            </dd>
                        </div>

                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                                About
                            </dt>
                            <dd className="mt-1 space-y-5 text-sm text-gray-900 max-w-prose">
                                <p>
                                    Tincidunt quam neque in cursus viverra orci,
                                    dapibus nec tristique. Nullam ut sit dolor
                                    consectetur urna, dui cras nec sed. Cursus
                                    risus congue arcu aenean posuere aliquam.
                                </p>
                                <p>
                                    Et vivamus lorem pulvinar nascetur non.
                                    Pulvinar a sed platea rhoncus ac mauris
                                    amet. Urna, sem pretium sit pretium urna,
                                    senectus vitae. Scelerisque fermentum,
                                    cursus felis dui suspendisse velit pharetra.
                                    Augue et duis cursus maecenas eget quam
                                    lectus. Accumsan vitae nascetur pharetra
                                    rhoncus praesent dictum risus suspendisse.
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </article>
        </Box>
    )
}

export default User
