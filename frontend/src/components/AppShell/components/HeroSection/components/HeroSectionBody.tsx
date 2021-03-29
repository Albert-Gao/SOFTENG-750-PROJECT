import React from 'react'

export const HeroSectionBody: React.FC = () => {
    return (
        <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">A WikiPedia</span>
                    <span className="block text-indigo-600 xl:inline">
                        that social
                    </span>
                </h1>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                </p>
                <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <a
                            href="#"
                            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
