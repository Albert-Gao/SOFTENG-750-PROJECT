import React from 'react'

export const Main: React.FC<{ isAuth: boolean }> = ({ isAuth, children }) => {
    return (
        <main className={isAuth ? '-mt-32' : ''}>
            <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="px-5 py-6 bg-white rounded-lg shadow sm:px-6">
                    <div className="border-4 border-gray-200 border-dashed rounded-lg h-96">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}
